/**
 * AceMind v3 — funções de servidor (Firebase Cloud Functions, 2ª geração, Node 22)
 *
 * O que fazem:
 *  - S.O.S: avisa a equipe por notificação push (e, se configurado, por um webhook de WhatsApp)
 *    e avisa o atleta quando alguém da equipe confirma o recebimento.
 *  - Lembretes: check-in diário e sessões marcadas (30 minutos antes).
 *  - Alertas opcionais da equipe: check-in de risco, dor forte, lesão nova.
 *  - Segurança: encerrar sessões em todos os aparelhos, desativar usuário, excluir conta (LGPD).
 *  - IA: análise de vídeo, feedback semanal do atleta e resumo de tendências da equipe (sem nomes).
 *
 * Segredos (configure uma vez):
 *   firebase functions:secrets:set VAPID_PRIVADA      (chave privada gerada com: npx web-push generate-vapid-keys)
 *   firebase functions:secrets:set GEMINI_API_KEY     (a mesma chave usada hoje na análise de vídeo)
 * Parâmetros (perguntados no primeiro deploy; podem ficar em branco):
 *   WEBHOOK_SOS_URL   — endereço que recebe um POST a cada S.O.S (Make, Zapier, n8n, Z-API...)
 *   GEMINI_MODELO     — modelo do Gemini (padrão gemini-2.5-flash)
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onDocumentCreated, onDocumentUpdated } = require("firebase-functions/v2/firestore");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { defineSecret, defineString } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
const webpush = require("web-push");

initializeApp();
const db = getFirestore();
const REGIAO = "us-central1";
const FUSO = "America/Sao_Paulo";
const VAPID_PRIVADA = defineSecret("VAPID_PRIVADA");
const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");
const WEBHOOK_SOS_URL = defineString("WEBHOOK_SOS_URL", { default: "" });
const GEMINI_MODELO = defineString("GEMINI_MODELO", { default: "gemini-2.5-flash" });

const EQUIPE = ["treinador", "fisioterapeuta", "medico", "psicologo", "assistente", "admin"];
const NIVEL = { starter: 1, pro: 2, elite: 3 };
const OPCOES = { region: REGIAO, cors: true, enforceAppCheck: false };

/* ───────── utilidades ───────── */
async function perfil(uid) { const s = await db.doc(`usuarios/${uid}`).get(); return s.exists ? s.data() : null; }
async function exigirAtivo(req) {
  if (!req.auth) throw new HttpsError("unauthenticated", "Entre novamente.");
  const p = await perfil(req.auth.uid);
  if (!p || p.desativado === true) throw new HttpsError("permission-denied", "Conta sem acesso.");
  if (p.revogadoEm && req.auth.token.auth_time <= p.revogadoEm) throw new HttpsError("unauthenticated", "Sessão encerrada. Entre novamente.");
  return p;
}
const ehEquipe = p => EQUIPE.includes(p.cargo);
const ehAdmin = p => p.cargo === "admin" || p.admin === true;
async function nivelMinimo(chave, staff) {
  const c = await db.doc("config/permissoes").get();
  const padrao = { iaFeedback: "elite", videoUpload: "elite", staffIAInsights: "elite", staffIAAnalise: "elite", staffNotificacoes: "elite" };
  const d = c.exists ? (staff ? c.data().staffFeatures : c.data().features) || {} : {};
  return NIVEL[d[chave]] || NIVEL[padrao[chave]] || 1;
}
async function exigirPlano(p, chave, staff) {
  if (staff && ehAdmin(p)) return;
  if ((NIVEL[p.plano] || 1) < await nivelMinimo(chave, staff)) throw new HttpsError("permission-denied", "Recurso não incluído no plano.");
}
/* limite por pessoa por dia (contador no servidor; as regras não deixam o app mexer) */
async function limiteDiario(uid, tipo, max) {
  const dia = new Date().toLocaleDateString("sv-SE", { timeZone: FUSO });
  const ref = db.doc(`limites/${uid}_${tipo}_${dia}`);
  await db.runTransaction(async t => {
    const s = await t.get(ref); const n = s.exists ? s.data().n : 0;
    if (n >= max) throw new HttpsError("resource-exhausted", "Limite diário atingido. Tente amanhã.");
    t.set(ref, { n: n + 1, uid, tipo, dia, expiraEm: new Date(Date.now() + 3 * 864e5) }, { merge: true });
  });
}
const texto = (v, n) => String(v ?? "").slice(0, n);
/* check-ins recentes de um atleta: usa o índice composto (pacienteId + data); sem ele, lê tudo e filtra */
async function checkinsDesde(uid, desde) {
  try { return (await db.collection("checkins").where("pacienteId", "==", uid).where("data", ">=", desde).orderBy("data", "desc").get()).docs.map(d => d.data()); }
  catch (e) {
    if (e.code !== 9 && e.code !== "failed-precondition") throw e;
    logger.warn("índice composto de checkins ainda não publicado: firebase deploy --only firestore:indexes");
    return (await db.collection("checkins").where("pacienteId", "==", uid).get()).docs.map(d => d.data()).filter(r => String(r.data) >= desde);
  }
}

/* ───────── notificações push ───────── */
let vapidPronto = false;
async function prepararVapid() {
  if (vapidPronto) return true;
  const pub = (await db.doc("config/publico").get()).data() || {};
  const privada = VAPID_PRIVADA.value();
  if (!pub.vapidPublica || !privada) { logger.warn("push sem chaves VAPID configuradas"); return false; }
  webpush.setVapidDetails("mailto:" + (pub.encarregadoEmail || "contato@acemind.app"), pub.vapidPublica, privada);
  vapidPronto = true; return true;
}
async function enviarPara(uid, payload) {
  const subs = await db.collection(`push_subs/${uid}/dispositivos`).get();
  let ok = 0;
  await Promise.all(subs.docs.map(async d => {
    const s = d.data();
    try { await webpush.sendNotification({ endpoint: s.endpoint, keys: s.keys }, JSON.stringify(payload), { TTL: payload.tipo === "sos" ? 3600 : 86400, urgency: payload.tipo === "sos" ? "high" : "normal" }); ok++; }
    catch (e) { if (e.statusCode === 404 || e.statusCode === 410) await d.ref.delete(); else logger.warn("push falhou", { uid, status: e.statusCode }); }
  }));
  return ok;
}
async function prefs(uid) { const s = await db.doc(`push_subs/${uid}`).get(); return (s.exists && s.data().prefs) || {}; }
async function equipeAtiva() {
  const q = await db.collection("usuarios").where("cargo", "in", EQUIPE).get();
  return q.docs.map(d => ({ uid: d.id, ...d.data() })).filter(u => u.desativado !== true);
}

/* ───────── S.O.S ───────── */
exports.onSosCriado = onDocumentCreated({ document: "sos_alertas/{id}", region: REGIAO, secrets: [VAPID_PRIVADA] }, async ev => {
  const s = ev.data && ev.data.data(); if (!s || s.status !== "pendente") return;
  const nome = texto(s.nome || "Atleta", 60);
  let enviados = 0;
  if (await prepararVapid()) {
    const equipe = await equipeAtiva();
    const res = await Promise.all(equipe.map(u => enviarPara(u.uid, { tipo: "sos", titulo: `S.O.S — ${nome}`, corpo: "Precisa de apoio agora. Toque para abrir a Central S.O.S.", tag: "sos-" + ev.params.id, destino: "sos" })));
    enviados = res.reduce((a, b) => a + b, 0);
  }
  const url = WEBHOOK_SOS_URL.value();
  if (url && /^https:\/\//.test(url)) {
    try {
      const perfilAtl = await perfil(s.pacienteId) || {};
      await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tipo: "sos", atleta: nome, telefone: perfilAtl.telefone || s.telefone || "", contatoEmergencia: perfilAtl.contatoEmergencia || null, data: s.data, id: ev.params.id, mensagem: `S.O.S AceMind: ${nome} precisa de apoio agora. Abra a Central S.O.S no app.` }) });
    } catch (e) { logger.error("webhook S.O.S falhou", e); }
  }
  await ev.data.ref.update({ notificadoEm: new Date().toISOString(), aparelhosNotificados: enviados });
});

exports.onSosAtualizado = onDocumentUpdated({ document: "sos_alertas/{id}", region: REGIAO, secrets: [VAPID_PRIVADA] }, async ev => {
  const a = ev.data.before.data(), d = ev.data.after.data();
  if (a.status === "pendente" && d.status === "em_atendimento" && await prepararVapid()) {
    const p = await prefs(d.pacienteId);
    if (p.sosRecebido !== false) await enviarPara(d.pacienteId, { tipo: "sos_ok", titulo: "A equipe recebeu seu S.O.S", corpo: `${texto(d.respondidoPorNome || "Alguém da equipe", 60)} vai falar com você. Fique com o celular por perto.`, tag: "sos-ok" });
  }
});

/* ───────── alertas opcionais da equipe ───────── */
async function alertarEquipe(pref, payload) {
  if (!await prepararVapid()) return;
  const min = await nivelMinimo("staffNotificacoes", true);
  const equipe = await equipeAtiva();
  await Promise.all(equipe.map(async u => {
    if (!ehAdmin(u) && (NIVEL[u.plano] || 1) < min) return;
    const p = await prefs(u.uid); if (p[pref] === true) await enviarPara(u.uid, payload);
  }));
}
exports.onCheckinCriado = onDocumentCreated({ document: "checkins/{id}", region: REGIAO, secrets: [VAPID_PRIVADA] }, async ev => {
  const r = ev.data && ev.data.data(); if (!r) return;
  const n = k => (r[k] === undefined || r[k] === null || r[k] === "" ? null : Number(r[k]));
  const sinais = [];
  if (n("foco") !== null && n("foco") <= 4) sinais.push("foco baixo"); if (n("energia") !== null && n("energia") <= 4) sinais.push("energia baixa");
  if (n("sono") !== null && n("sono") <= 4) sinais.push("sono ruim"); if (n("humor") !== null && n("humor") <= 3) sinais.push("humor baixo");
  if (n("estresse") !== null && n("estresse") >= 8) sinais.push("estresse alto");
  const nome = texto(r.nome || "Atleta", 60);
  if (sinais.length) await alertarEquipe("checkinRisco", { tipo: "checkin", titulo: `Check-in de ${nome}`, corpo: "Sinais: " + sinais.join(", "), tag: "ck-" + r.pacienteId, destino: "dashboard" });
  if (n("dor") !== null && n("dor") >= 7) await alertarEquipe("dorForte", { tipo: "dor", titulo: `Dor forte — ${nome}`, corpo: `Dor ${n("dor")}/10${r.dorLocal ? " · " + texto(r.dorLocal, 40) : ""}`, tag: "dor-" + r.pacienteId, destino: "dashboard" });
});
exports.onLesaoCriada = onDocumentCreated({ document: "atletas/{uid}/lesoes/{id}", region: REGIAO, secrets: [VAPID_PRIVADA] }, async ev => {
  const l = ev.data && ev.data.data(); if (!l) return;
  const atl = await perfil(ev.params.uid) || {};
  await alertarEquipe("lesao", { tipo: "lesao", titulo: `Lesão registrada — ${texto(atl.nome || "Atleta", 60)}`, corpo: `${texto(l.local, 40)} · ${texto(l.autorNome || "", 60)}`, tag: "lesao-" + ev.params.id, destino: "lesoes" });
});

/* ───────── lembretes (a cada 15 minutos) ───────── */
const local = (d, n = 16) => new Date(d).toLocaleString("sv-SE", { timeZone: FUSO }).replace(" ", "T").slice(0, n);
exports.lembretes = onSchedule({ schedule: "every 15 minutes", timeZone: FUSO, region: REGIAO, secrets: [VAPID_PRIVADA] }, async () => {
  if (!await prepararVapid()) return;
  const agora = Date.now();
  // sessões que começam em 25 a 40 minutos (horário de Brasília, como o app grava)
  const ini = local(agora + 25 * 60000), fim = local(agora + 40 * 60000);
  const sess = await db.collection("agenda").where("dataHora", ">=", ini).where("dataHora", "<=", fim).get();
  for (const d of sess.docs) {
    const s = d.data(); if (s.lembreteEnviado) continue;
    const hora = String(s.dataHora).slice(11, 16);
    const pa = await prefs(s.atletaId);
    if (pa.sessao !== false) await enviarPara(s.atletaId, { tipo: "sessao", titulo: "Sessão daqui a pouco", corpo: `${texto(s.titulo || "Sessão", 60)} às ${hora}${s.profissionalNome ? " com " + texto(s.profissionalNome, 40) : ""}.`, tag: "sess-" + d.id, destino: "agenda" });
    if (s.profissionalId) { const pp = await prefs(s.profissionalId); if (pp.sessao !== false) await enviarPara(s.profissionalId, { tipo: "sessao", titulo: "Sessão daqui a pouco", corpo: `${texto(s.nome || "Atleta", 60)} às ${hora}.`, tag: "sess-" + d.id, destino: "agenda" }); }
    await d.ref.update({ lembreteEnviado: true });
  }
  // check-in diário: na primeira rodada de cada hora, para quem escolheu este horário
  const agoraLocal = local(agora);
  if (Number(agoraLocal.slice(14, 16)) >= 15) return;
  const hh = agoraLocal.slice(11, 13) + ":00";
  const quem = await db.collection("push_subs").where("prefs.horaCheckin", "==", hh).get();
  if (quem.empty) return;
  const inicioDia = new Date(new Date(agoraLocal.slice(0, 10) + "T00:00:00-03:00").getTime()).toISOString();
  const feitos = new Set((await db.collection("checkins").where("data", ">=", inicioDia).get()).docs.map(d => d.data().pacienteId));
  for (const d of quem.docs) {
    if (d.data().prefs.lembreteCheckin === false || feitos.has(d.id)) continue;
    const p = await perfil(d.id); if (!p || p.cargo !== "paciente" || p.desativado) continue;
    await enviarPara(d.id, { tipo: "checkin", titulo: "Check-in do dia", corpo: "Como você está hoje? Leva menos de um minuto.", tag: "checkin", destino: "home" });
  }
});

/* ───────── segurança e LGPD ───────── */
exports.status = onCall(OPCOES, async req => { await exigirAtivo(req); return { ok: true, versao: "3.0" }; });

exports.testarPush = onCall({ ...OPCOES, secrets: [VAPID_PRIVADA] }, async req => {
  await exigirAtivo(req);
  if (!await prepararVapid()) throw new HttpsError("failed-precondition", "Notificações ainda não configuradas.");
  return { enviados: await enviarPara(req.auth.uid, { tipo: "teste", titulo: "AceMind", corpo: "Notificações funcionando neste aparelho.", tag: "teste" }) };
});

exports.encerrarSessoes = onCall(OPCOES, async req => {
  const p = await exigirAtivo(req);
  const alvo = texto(req.data && req.data.uid || req.auth.uid, 128);
  if (alvo !== req.auth.uid && !ehAdmin(p)) throw new HttpsError("permission-denied", "Só a administração encerra sessões de outra pessoa.");
  await getAuth().revokeRefreshTokens(alvo);
  await db.doc(`usuarios/${alvo}`).update({ revogadoEm: Math.floor(Date.now() / 1000) });
  await db.collection("auditoria").add({ acao: "sessoes_encerradas", alvoId: alvo, alvoNome: "", detalhe: "servidor", porId: req.auth.uid, porNome: p.nome || "", porCargo: p.cargo || "", data: new Date().toISOString() });
  return { ok: true };
});

exports.desativarUsuario = onCall(OPCOES, async req => {
  const p = await exigirAtivo(req); if (!ehAdmin(p)) throw new HttpsError("permission-denied", "Só a administração.");
  const alvo = texto(req.data && req.data.uid, 128), des = req.data && req.data.desativar === true;
  if (!alvo || alvo === req.auth.uid) throw new HttpsError("invalid-argument", "Usuário inválido.");
  await getAuth().updateUser(alvo, { disabled: des });
  const upd = { desativado: des }; if (des) { await getAuth().revokeRefreshTokens(alvo); upd.revogadoEm = Math.floor(Date.now() / 1000); }
  await db.doc(`usuarios/${alvo}`).update(upd);
  return { ok: true };
});

exports.excluirConta = onCall({ ...OPCOES, timeoutSeconds: 300 }, async req => {
  const p = await exigirAtivo(req); if (!ehAdmin(p)) throw new HttpsError("permission-denied", "Só a administração.");
  const uid = texto(req.data && req.data.uid, 128), manter = req.data && req.data.manterClinico !== false;
  if (!uid || uid === req.auth.uid) throw new HttpsError("invalid-argument", "Usuário inválido.");
  const apagar = async q => { const s = await q.get(); const bw = db.bulkWriter(); s.docs.forEach(d => bw.delete(d.ref)); await bw.close(); };
  await apagar(db.collection("checkins").where("pacienteId", "==", uid));
  await apagar(db.collection("ia_analises").where("atletaId", "==", uid));
  await apagar(db.collection("agenda").where("atletaId", "==", uid));
  for (const sub of ["eventos", "planos", "treinos", "feedback_ia"]) await db.recursiveDelete(db.collection(`atletas/${uid}/${sub}`));
  await db.recursiveDelete(db.collection(`prontuarios/${uid}/partidas`));
  await db.recursiveDelete(db.doc(`push_subs/${uid}`));
  if (!manter) {
    await apagar(db.collection("treinos_mentais").where("atletaId", "==", uid));
    await apagar(db.collection("sos_alertas").where("pacienteId", "==", uid));
    await db.recursiveDelete(db.doc(`atletas/${uid}`));
    await db.recursiveDelete(db.doc(`prontuarios/${uid}`));
  }
  await db.doc(`usuarios/${uid}`).set({ nome: "Titular excluído", email: "", cargo: "paciente", plano: "starter", desativado: true, excluidoEm: new Date().toISOString(), registrosClinicosMantidos: manter });
  try { await getAuth().deleteUser(uid); } catch (e) { if (e.code !== "auth/user-not-found") throw e; }
  await db.collection("auditoria").add({ acao: "conta_excluida", alvoId: uid, alvoNome: "", detalhe: manter ? "registros clínicos mantidos (prazo legal)" : "exclusão total", porId: req.auth.uid, porNome: p.nome || "", porCargo: p.cargo || "", data: new Date().toISOString() });
  return { ok: true };
});

/* ───────── IA (Gemini) — a chave nunca vai para o app ───────── */
async function gemini(partes, json) {
  const modelo = GEMINI_MODELO.value() || "gemini-2.5-flash";
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelo)}:generateContent`, {
    method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_API_KEY.value() },
    body: JSON.stringify({ contents: [{ role: "user", parts: partes }], generationConfig: { temperature: 0.5, maxOutputTokens: 1200, ...(json ? { responseMimeType: "application/json" } : {}) } })
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { logger.error("gemini", r.status, j.error && j.error.message); throw new HttpsError("unavailable", "A IA não respondeu. Tente de novo."); }
  return ((j.candidates || [])[0]?.content?.parts || []).map(p => p.text || "").join("").trim();
}
const AVISO = "Responda em português do Brasil, em tom respeitoso e encorajador. Não faça diagnóstico médico ou psicológico e não sugira medicamentos. Se houver sinais de sofrimento importante, recomende conversar com a equipe.";

exports.analisarVideo = onCall({ ...OPCOES, secrets: [GEMINI_API_KEY], timeoutSeconds: 120, memory: "512MiB" }, async req => {
  const p = await exigirAtivo(req);
  if (ehEquipe(p)) await exigirPlano(p, "staffIAAnalise", true);
  else {
    await exigirPlano(p, "videoUpload", false);
    if (!(p.consentimento && p.consentimento.video === true)) throw new HttpsError("permission-denied", "Autorize o envio de vídeos em Meus dados.");
  }
  const frames = (req.data && Array.isArray(req.data.frames) ? req.data.frames : []).slice(0, 6).filter(f => typeof f === "string" && f.length < 400000 && /^[A-Za-z0-9+/=]+$/.test(f));
  if (!frames.length) throw new HttpsError("invalid-argument", "Nenhum quadro do vídeo foi recebido.");
  await limiteDiario(req.auth.uid, "video", ehEquipe(p) ? 60 : 5);
  const esporte = texto(req.data.esporte, 60) || "a modalidade do atleta";
  const prompt = `Você é um analista técnico de ${esporte}. Analise estes ${frames.length} quadros, em ordem, de um vídeo de treino ou competição. ${AVISO}
Devolva só JSON no formato {"pontosFortes":[até 4 frases],"pontosAMelhorar":[até 4 frases],"planosDeAcao":[até 4 frases práticas],"resumo":"até 3 frases"}.`;
  const txt = await gemini([{ text: prompt }, ...frames.map(f => ({ inline_data: { mime_type: "image/jpeg", data: f } }))], true);
  let r; try { r = JSON.parse(txt.replace(/^```json|```$/g, "")); } catch (e) { throw new HttpsError("internal", "A resposta da IA veio em formato inesperado."); }
  const l = a => (Array.isArray(a) ? a : []).slice(0, 6).map(x => texto(x, 400));
  return { pontosFortes: l(r.pontosFortes), pontosAMelhorar: l(r.pontosAMelhorar), planosDeAcao: l(r.planosDeAcao), resumo: texto(r.resumo, 1500) };
});

exports.feedbackIA = onCall({ ...OPCOES, secrets: [GEMINI_API_KEY], timeoutSeconds: 60 }, async req => {
  const p = await exigirAtivo(req);
  if (ehEquipe(p)) throw new HttpsError("permission-denied", "Recurso do app do atleta.");
  await exigirPlano(p, "iaFeedback", false);
  const uid = req.auth.uid, desde = new Date(Date.now() - 14 * 864e5).toISOString();
  const cks = (await checkinsDesde(uid, desde)).sort((a, b) => String(a.data).localeCompare(String(b.data)));
  const trs = (await db.collection(`atletas/${uid}/treinos`).get()).docs.map(d => d.data()).filter(t => t.status === "realizado" && String(t.realizado?.data || t.data) >= desde.slice(0, 10));
  const pts = (await db.collection(`prontuarios/${uid}/partidas`).get()).docs.map(d => d.data()).sort((a, b) => String(b.dataRegistro || b.data).localeCompare(String(a.dataRegistro || a.data))).slice(0, 5);
  if (!cks.length && !trs.length) throw new HttpsError("failed-precondition", "Faça alguns check-ins antes de pedir o feedback.");
  await limiteDiario(uid, "feedback", 3);
  const linhas = cks.map(r => `${String(r.data).slice(0, 10)}: foco ${r.foco}, energia ${r.energia}, sono ${r.sono ?? "-"}, humor ${r.humor ?? "-"}, estresse ${r.estresse ?? "-"}, dor ${r.dor ?? "-"}`).join("\n");
  const treinos = trs.map(t => `${String(t.realizado?.data || t.data).slice(0, 10)}: ${texto(t.titulo, 40)} ${t.realizado?.duracao || "?"} min, PSE ${t.realizado?.pse ?? "?"}`).join("\n");
  const comps = pts.map(x => `${texto(x.torneio, 50)}: ${texto(x.resultado, 20)}, confiança ${x.confianca ?? "-"}`).join("\n");
  const prompt = `Você é um mentor de alta performance esportiva (${texto(p.esporte, 40) || "modalidade não informada"}). ${AVISO}
Com base nos dados das últimas 2 semanas, escreva um feedback curto (até 180 palavras) direto para o atleta, com: 1) o que está indo bem; 2) um ponto de atenção; 3) duas ações simples para os próximos 7 dias. Escalas de 1 a 10 (estresse e dor: maior = pior).
Check-ins:\n${linhas || "nenhum"}\nTreinos:\n${treinos || "nenhum"}\nCompetições:\n${comps || "nenhuma"}`;
  const txt = texto(await gemini([{ text: prompt }], false), 3000);
  await db.collection(`atletas/${uid}/feedback_ia`).add({ texto: txt, geradoEm: new Date().toISOString(), modelo: GEMINI_MODELO.value() });
  return { texto: txt };
});

exports.insightsIA = onCall({ ...OPCOES, secrets: [GEMINI_API_KEY], timeoutSeconds: 60 }, async req => {
  const p = await exigirAtivo(req);
  if (!ehEquipe(p)) throw new HttpsError("permission-denied", "Recurso da equipe.");
  await exigirPlano(p, "staffIAInsights", true);
  const atl = (req.data && Array.isArray(req.data.atletas) ? req.data.atletas : []).slice(0, 80).map(a => ({
    codigo: texto(a.codigo, 6).replace(/[^A-Z0-9]/g, ""), modalidade: texto(a.modalidade, 30), checkins7d: Number(a.checkins7d) || 0,
    prontidao7d: a.prontidao7d == null ? null : Math.round(Number(a.prontidao7d) * 10) / 10, prontidaoAntes: a.prontidaoAntes == null ? null : Math.round(Number(a.prontidaoAntes) * 10) / 10,
    estresse7d: a.estresse7d == null ? null : Math.round(Number(a.estresse7d) * 10) / 10, sono7d: a.sono7d == null ? null : Math.round(Number(a.sono7d) * 10) / 10,
    sinais: (Array.isArray(a.sinais) ? a.sinais : []).slice(0, 6).map(s => texto(s, 120))
  }));
  if (!atl.length) throw new HttpsError("invalid-argument", "Sem dados.");
  await limiteDiario(req.auth.uid, "insights", 10);
  const prompt = `Você apoia uma equipe multidisciplinar de esporte (treinador, fisioterapia, medicina, psicologia). ${AVISO}
Os atletas estão identificados só por códigos (A1, A2...). Use exatamente esses códigos. Escreva um resumo da semana em até 200 palavras: prioridades (quem acompanhar primeiro e por quê), padrões do grupo e 3 sugestões práticas para a equipe. Escala 0 a 10.
Dados: ${JSON.stringify(atl)}`;
  return { texto: texto(await gemini([{ text: prompt }], false), 4000) };
});
