/* ════ Breu · mascote da visão do atleta (Ace Mind) ════
   Módulo independente do app.js: observa a tela do atleta e reage ao que a pessoa faz.
   - Até 14 anos: Breu Sub-15 (breu-sub15.svg). A partir de 15: Breu humanoide (breu-15.svg).
   - Companheiro flutuante (canto inferior direito) em todas as abas + card no QG Mental.
   - Nunca envia dados para fora: preferências ficam só no aparelho (localStorage). */
(function () {
  "use strict";
  const VERSAO = "1.0.0";
  const SCRIPT = document.currentScript;
  const BASE = SCRIPT && SCRIPT.src ? new URL(".", SCRIPT.src).href : "breu/";
  const NS = "http://www.w3.org/2000/svg";
  const mmReduz = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  const mmToque = window.matchMedia ? matchMedia("(pointer: coarse)") : { matches: false };
  const reduz = () => mmReduz.matches;

  /* ── acesso ao estado do app (variáveis globais do app.js) ── */
  const pegar = f => { try { return f(); } catch (e) { return undefined; } };
  /* global APP, SOSA, SP */
  const app = () => pegar(() => APP);
  const sosStatus = () => pegar(() => SOSA.status) || "";
  const esporte = () => pegar(() => SP()) || { evento: "Competição", g: "f" };

  function idadeDe(n) {
    if (!n) return null;
    const s = String(n);
    const d = new Date(/^\d{4}-\d{2}-\d{2}$/.test(s) ? s + "T12:00:00" : s);
    if (isNaN(d)) return null;
    const h = new Date();
    let a = h.getFullYear() - d.getFullYear();
    const m = h.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && h.getDate() < d.getDate())) a--;
    return a >= 0 && a < 120 ? a : null;
  }
  const aniversarioHoje = n => { const s = String(n || ""); const m = s.match(/^\d{4}-(\d{2})-(\d{2})/); if (!m) return false; const h = new Date(); return +m[1] === h.getMonth() + 1 && +m[2] === h.getDate(); };
  const primeiro = n => String(n || "").trim().split(/\s+/)[0] || "";
  const sorteia = a => a[Math.floor(Math.random() * a.length)];
  const entre = (a, b) => a + Math.random() * (b - a);
  const lim = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ── preferências no aparelho ── */
  const LSK = () => "breu_v1_" + (S.uid || "anon");
  function pref() { try { return JSON.parse(localStorage.getItem(LSK()) || "{}") || {}; } catch (e) { return {}; } }
  function salvarPref(p) { try { localStorage.setItem(LSK(), JSON.stringify({ ...pref(), ...p })); } catch (e) {} }
  const sessao = {
    get(k) { try { return sessionStorage.getItem("breu_" + k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem("breu_" + k, v); } catch (e) {} }
  };

  /* ════ falas ════ */
  const F = {
    intro: {
      s: "Oi, {nome}! Eu sou o Breu, a pantera do Ace Mind. Vou te acompanhar por aqui. Toca em mim pra conversar!",
      m: "Fala, {nome}. Sou o Breu, a pantera do Ace Mind. Tô aqui pra te acompanhar no dia a dia. Toque em mim pra conversar."
    },
    cresceu: { m: "Percebeu, {nome}? Você fez 15 e eu cresci junto. A partir de agora, a gente conversa de igual pra igual." },
    quieto: { s: "Beleza, vou tirar um cochilo. Toca em mim quando precisar!", m: "Beleza, fico na minha. Toque em mim quando precisar." },
    acorda: { s: ["Voltei! Senti sua falta.", "Oi de novo! Bora?"], m: ["Tô de volta.", "De volta. Bora?"] },
    cochilou: { s: "Opa, cochilei! Voltei.", m: "Opa. Voltei." },
    volta: { s: "Voltou! Bora?", m: "De volta. Bora?" },
    abas: {
      pre: { s: "Pré-{evento}! Rotina de sempre e cabeça no lugar. Bora se preparar?", m: "Pré-{evento}: rotina, checklist e frase âncora. O resto é execução." },
      pos: { s: "Ganhou ou perdeu, contar como foi te ajuda a melhorar.", m: "Resultado à parte, o Raio-X é onde você aprende. Registra enquanto tá fresco." },
      treino: { s: "Treinou? Registra aqui que eu fico de olho na sua carga!", m: "Treino registrado é treino que conta. PSE honesta, carga real." },
      plano: { s: "Aqui ficam seus objetivos. Um passo de cada vez!", m: "Seu plano: objetivo claro, próximos passos e o que a equipe recomenda." },
      agenda: { s: "Bora ver o que tem na semana?", m: "Semana organizada, cabeça leve." },
      ia: { s: "Manda um vídeo seu que a IA dá umas dicas!", m: "Manda um vídeo: a IA aponta o que ajustar. A palavra final é sempre da equipe." },
      dados: { s: "Aqui você vê seus dados e cuida da sua privacidade.", m: "Seus dados são seus. Aqui você controla tudo." }
    },
    ck: {
      sono_baixo: { s: "Dormiu mal? Hoje vale ir pra cama mais cedo.", m: "Noite ruim. Prioriza o sono hoje: recuperação também é treino." },
      sono_alto: { s: "Dormiu que nem pantera!", m: "Sono em dia. Isso aparece na hora H." },
      foco_baixo: { s: "Cabeça nas nuvens? Uma respirada ajuda a voltar.", m: "Foco disperso acontece. Um minuto de respiração ajuda a voltar pro presente." },
      foco_alto: { s: "Foco total! É assim que se faz.", m: "Foco lá em cima. Aproveita esse estado." },
      energia_baixo: { s: "Bateria fraca? Água, comida boa e descanso!", m: "Energia baixa: hidratação, comida e descanso. Respeita o corpo hoje." },
      energia_alto: { s: "Energia no talo!", m: "Energia lá em cima. Canaliza isso no treino." },
      humor_baixo: { s: "Dia difícil? Tô aqui com você. Se quiser, conta pra equipe.", m: "Dia pesado? Tô contigo. Se quiser, escreve no Trunfo do Dia ou chama a equipe." },
      humor_alto: { s: "Que astral! Adoro te ver assim.", m: "Que astral. Guarda essa sensação." },
      estresse_alto: { s: "Tá tenso? Respira comigo um minutinho.", m: "Estresse alto. Um minuto de Zone Reset comigo?" },
      estresse_baixo: { s: "Tranquilão, hein!", m: "Cabeça tranquila. Ótimo ponto de partida." },
      dor_alguma: { s: "Tá doendo? Marca onde é pra equipe saber.", m: "Sentiu dor? Marca o local: a equipe precisa saber." },
      dor_forte: { s: "Dor forte é sinal de parar e avisar a equipe, combinado?", m: "Dor forte: não força. A equipe vai ver isso." },
      salvo: { s: ["Check-in feito! Você tá ficando craque nisso.", "Anotado! Mais um dia cuidando da cabeça."], m: ["Check-in feito. Constância é o que separa os bons dos grandes.", "Registrado. Mais um dia de dado bom pra equipe trabalhar."] },
      salvo_alerta: { s: "Anotado! A equipe vai cuidar de você.", m: "Registrado. A equipe vai acompanhar de perto: você não tá sozinho." },
      trunfo: { s: "Qual foi a melhor parte do seu dia? Pode ser coisa pequena!", m: "Qual foi o melhor momento mental de hoje? Vale coisa pequena." },
      ouvindo: { s: "Tô ouvindo!", m: "Tô ouvindo." },
      arrasta: { s: "Arrasta as barras: eu vou sentindo junto com você!", m: "Move as barras com sinceridade: eu sinto junto." }
    },
    zr_ini: { s: "Respira comigo: puxa pelo nariz, segura, solta devagar.", m: "Respira comigo. Quatro tempos: inspira, segura, solta, pausa." },
    zr_fim: { s: "Isso! Mais calminho agora?", m: "Isso. Frequência baixa, cabeça clara." },
    tunel_fim: { s: "Foco é treino. Mandou bem!", m: "Foco treinado é foco que aparece na hora H." },
    checklist: { s: "Tudo pronto! Agora é com você!", m: "Trincheira pronta. Agora é execução." },
    raiox: {
      vitoria: { s: "Vitória! Conta o que funcionou pra repetir!", m: "Vitória registrada. Anota o que funcionou: é isso que você vai repetir." },
      derrota: { s: "Perder faz parte. Você vai voltar mais forte!", m: "Derrota dói, mas ensina. Você já tá transformando em aprendizado." },
      outro: { s: "Registrado! Cada {evento} te ensina alguma coisa.", m: "Raio-X feito. Cada registro te deixa mais afiado." }
    },
    treino: { s: "Treino anotado! {ua} de carga, hein!", m: "Mais um tijolo: {ua} de carga registrados." },
    ia_pronta: { s: "Pronto! Dá uma olhada nas dicas.", m: "Análise pronta. Lê com calma e leva pro treino." },
    sos: { s: "Tô aqui com você. Respira devagar enquanto a equipe responde.", m: "Tô aqui com você. Respira devagar enquanto a equipe responde." },
    cocegas: { s: "Ei, faz cócegas!", m: "Tá testando meus reflexos?" },
    carinho: { s: "Rrrrr...", m: "Rrrr. Valeu." },
    papo: {
      s: [
        "Errou? Respira, solta e vai pro próximo ponto.",
        "Pantera não se apressa: espera o momento certo.",
        "Água! Pantera hidratada joga melhor.",
        "O treino de hoje conta pro seu sonho de amanhã.",
        "Antes de dormir, lembra de uma coisa boa que você fez hoje.",
        "Nervoso antes {de_evento}? É sinal de que isso importa pra você.",
        "Cabeça fria, coração quente.",
        "Faz o que depende de você. O resto, deixa pra lá.",
        "Dormir bem deixa o reflexo mais rápido. Sério!",
        "Comemora as pequenas vitórias também!",
        "Bateu o nervoso? Respira em quatro tempos. Funciona!",
        "Treino bom é treino feito com vontade, não com pressa."
      ],
      m: [
        "Controle o que dá pra controlar: esforço, atitude, preparação.",
        "Erro é dado, não sentença. Reset e próximo ponto.",
        "Sono é o treino que ninguém vê.",
        "Pressão é privilégio: significa que importa.",
        "Respiração é o atalho mais curto entre o caos e o controle.",
        "Rotina pré-{evento} tira o peso da decisão na hora H.",
        "Hidratação começa no dia anterior.",
        "Confiança se constrói com evidência. Seus registros são evidência.",
        "Visualiza a execução antes de executar.",
        "Disciplina é escolher o que você quer mais, não o que você quer agora.",
        "Foco no processo. O placar é consequência.",
        "Quem cuida da cabeça no treino tem ela no lugar na competição."
      ]
    },
    hero: {
      pendente: { s: "Me conta como você chegou hoje? É rapidinho: menos de um minuto.", m: "Antes de tudo: como você chegou hoje? O check-in leva menos de um minuto." },
      pendente_tarde: { s: "Já tá tarde! Faz o check-in rapidinho e vai descansar: sono também é treino.", m: "Tá tarde. Check-in rápido e cama: sono também é treino." },
      feito: { s: "Check-in feito! Que tal respirar comigo um pouquinho?", m: "Check-in feito. Quer fechar com um minuto de respiração comigo?" },
      livre: { s: "Tô aqui pra te acompanhar. Toca em mim quando quiser!", m: "Tô aqui pra te acompanhar. Toque em mim quando quiser." },
      aniver: { s: "{idade} anos! Hoje o Breu tá vibrando por você.", m: "{idade} anos. Que venha a melhor temporada da sua vida." }
    }
  };

  /* ════ estado ════ */
  const S = {
    montado: false, montando: false, versao: null, uid: null, nome: "", idade: null, nasc: "",
    rig: null, dock: null, btn: null, fala: null, falaTimer: 0, svgC: null,
    hero: null, svgH: null, heroVisivel: false, io: null,
    base: "foco", expr: "foco", exprTimer: 0, aba: null,
    modo: null, resp: null, sosVisto: "", ultimaFalaAuto: 0,
    ultimaAcao: Date.now(), bocejou: false, dormindo: false, quieto: false,
    escondidoEm: 0, toquesRapidos: [], ckFeito: null, resultado: "",
    ptr: null, ptrT: 0, raf: 0, timers: new Set(), obs: [], ouvintes: [],
    ckUltimo: {}, ckFalado: {}, chkFalado: false, tunel: false, zr: false, bloqueando: false, critico: false, cobertura: 0, forcaDentro: 0
  };
  const V = (o, vars) => { // escolhe a versão da fala (s = Sub-15, m = 15+) e preenche as variáveis
    let t = o && (S.versao === "sub15" ? (o.s !== undefined ? o.s : o.m) : (o.m !== undefined ? o.m : o.s));
    if (Array.isArray(t)) t = sorteia(t);
    if (!t) return "";
    const sp = esporte(), ev = String(sp.evento || "Competição").toLowerCase(), masc = sp.g === "m";
    const d = { nome: S.nome, evento: ev, o_evento: (masc ? "o " : "a ") + ev, de_evento: (masc ? "do " : "da ") + ev, idade: S.idade, ...(vars || {}) };
    return t.replace(/\{(\w+)\}/g, (_, k) => (d[k] !== undefined && d[k] !== null ? d[k] : ""));
  };

  /* ── temporizadores e ouvintes (tudo é desfeito ao sair) ── */
  function depois(fn, ms) { const id = setTimeout(() => { S.timers.delete(id); fn(); }, ms); S.timers.add(id); return id; }
  function cancelar(id) { if (id) { clearTimeout(id); S.timers.delete(id); } }
  function ouvir(alvo, ev, fn, op) { alvo.addEventListener(ev, fn, op); S.ouvintes.push([alvo, ev, fn, op]); }

  /* ════ arte ════ */
  const cacheRig = {};
  function carregarRig(versao) {
    if (cacheRig[versao]) return cacheRig[versao];
    const url = BASE + (versao === "sub15" ? "breu-sub15.svg" : "breu-15.svg") + "?v=" + VERSAO;
    cacheRig[versao] = fetch(url, { credentials: "same-origin" })
      .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.text(); })
      .then(txt => {
        const doc = new DOMParser().parseFromString(txt, "image/svg+xml");
        const svg = doc.documentElement;
        if (!svg || svg.nodeName !== "svg" || doc.getElementsByTagName("parsererror").length) throw new Error("arte inválida");
        return svg;
      })
      .catch(e => { delete cacheRig[versao]; throw e; });
    return cacheRig[versao];
  }

  let seq = 0;
  function el(tag, attrs) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; }
  function instancia(tipo) {
    const P = "br" + (++seq) + "-";
    const svg = document.importNode(S.rig, true);
    svg.querySelectorAll("[id]").forEach(n => { n.id = P + n.id; });
    svg.querySelectorAll("*").forEach(n => {
      for (const a of ["fill", "stroke", "filter", "clip-path", "mask"]) {
        const v = n.getAttribute(a);
        if (v && v.indexOf("url(#") > -1) n.setAttribute(a, v.replace(/url\(#([^)]+)\)/g, "url(#" + P + "$1)"));
      }
    });
    svg.removeAttribute("width"); svg.removeAttribute("height");
    svg.setAttribute("aria-hidden", "true"); svg.setAttribute("focusable", "false");
    if (tipo === "busto") {
      const [cx, cy, r] = (svg.getAttribute("data-circulo") || "300 170 150").split(" ").map(Number);
      const defs = svg.querySelector("defs");
      const cp = el("clipPath", { id: P + "circ" }); cp.appendChild(el("circle", { cx, cy, r })); defs.appendChild(cp);
      const fundo = el("circle", { cx, cy, r, fill: "url(#" + P + "spot)" });
      const grupo = el("g", { "clip-path": "url(#" + P + "circ)" });
      const corpo = svg.querySelector(".b-corpo"), cabeca = svg.querySelector(".b-cabeca");
      const cauda = Array.from(svg.children).find(n => n.classList && n.classList.contains("b-cauda"));
      const antes = cauda || corpo;
      svg.insertBefore(fundo, antes);
      svg.insertBefore(grupo, antes);
      if (cauda) grupo.appendChild(cauda);
      grupo.appendChild(corpo);
      const R = r + 5, pt = a => [cx + R * Math.cos(a * Math.PI / 180), cy + R * Math.sin(a * Math.PI / 180)].map(v => v.toFixed(1)).join(",");
      const arco = (a0, a1, cor) => el("path", { d: `M${pt(a0)} A${R},${R} 0 0 1 ${pt(a1)}`, fill: "none", stroke: cor, "stroke-width": 9, class: "b-anel" });
      svg.insertBefore(arco(112, 280, "#00D1FF"), cabeca);
      svg.insertBefore(arco(292, 460, "#D2456C"), cabeca);
      svg.setAttribute("viewBox", svg.getAttribute("data-vb-busto"));
    } else {
      svg.setAttribute("viewBox", svg.getAttribute("data-vb-corpo"));
      svg.setAttribute("preserveAspectRatio", "xMidYMax meet");
    }
    svg.setAttribute("data-x", S.expr);
    return svg;
  }
  const instancias = () => [S.svgC, S.hero && S.hero.isConnected ? S.svgH : null].filter(Boolean);

  /* ════ expressões ════ */
  const OLHO_FECHADO = { respira: 1, vibra: 1, bocejo: 1 };
  function aplicar(x) {
    S.expr = x;
    instancias().forEach(s => s.setAttribute("data-x", x));
  }
  function base(x) { S.base = x; if (!S.exprTimer) aplicar(x); }
  function reagir(x, ms = 1800) {
    if (S.modo === "sos" && x !== "respira" && x !== "apoio") return;
    cancelar(S.exprTimer); aplicar(x);
    S.exprTimer = depois(() => { S.exprTimer = 0; aplicar(S.base); }, ms);
  }
  function classe(alvos, cls, ms) {
    alvos.filter(Boolean).forEach(a => { a.classList.remove(cls); void a.getBoundingClientRect(); a.classList.add(cls); });
    depois(() => alvos.filter(Boolean).forEach(a => a.classList.remove(cls)), ms);
  }
  function piscar() {
    if (!OLHO_FECHADO[S.expr] && !S.dormindo && !document.hidden) classe(instancias(), "pisca", 200);
  }
  function cicloPiscar() {
    depois(() => { piscar(); if (Math.random() < .22) depois(piscar, 260); cicloPiscar(); }, entre(2400, 6200));
  }
  function cicloOrelhas() {
    depois(() => {
      if (!reduz() && !document.hidden && S.modo !== "sos" && S.modo !== "tunel") classe(instancias(), Math.random() < .5 ? "orelha-e" : "orelha-d", 500);
      cicloOrelhas();
    }, entre(6000, 14000));
  }
  function festejar() {
    if (reduz()) return;
    classe([S.dock, S.hero], "breu-festa", 900);
    if (S.dock && /dentro|espiando/.test(S.dock.dataset.estado)) classe([S.dock.querySelector(".breu-corpo")], "breu-pula", 900); // espiando, o pulo é rápido e volta para baixo
    if (S.heroVisivel) classe([S.hero.querySelector(".breu-hero-corpo")], "breu-pula", 900);
    classe(instancias(), "agitado", 1800);
  }

  /* ════ olhar: segue o ponteiro / o dedo ════ */
  const OLHO_Y = { sub15: 147, "15": 118 };
  function pontoDoOlho(svg) {
    const r = svg.getBoundingClientRect();
    if (!r.width) return null;
    const vb = (svg.getAttribute("viewBox") || "0 0 1 1").split(/\s+/).map(Number);
    const meio = svg.getAttribute("preserveAspectRatio") !== "xMidYMax meet";
    const k = Math.min(r.width / vb[2], r.height / vb[3]);
    const ox = (r.width - vb[2] * k) / 2, oy = meio ? (r.height - vb[3] * k) / 2 : r.height - vb[3] * k;
    return { x: r.left + ox + (300 - vb[0]) * k, y: r.top + oy + (OLHO_Y[S.versao] - vb[1]) * k };
  }
  function olharPara(px, py) {
    instancias().forEach(svg => {
      let nx = 0, ny = 0;
      if (px !== null && S.modo !== "tunel") {
        const c = pontoDoOlho(svg); if (!c) return;
        const dx = px - c.x, dy = py - c.y, d = Math.hypot(dx, dy) || 1, f = Math.min(1, d / 240);
        nx = dx / d * f; ny = dy / d * f;
      }
      const st = svg.style;
      st.setProperty("--ox", (nx * 9).toFixed(2) + "px");
      st.setProperty("--oy", (ny * 4.5).toFixed(2) + "px");
      st.setProperty("--hx", (nx * 7).toFixed(2) + "px");
      st.setProperty("--hy", (ny * 5).toFixed(2) + "px");
      st.setProperty("--hr", (nx * 5).toFixed(2) + "deg");
    });
  }
  function agendarOlhar() {
    if (S.raf || reduz()) return;
    S.raf = requestAnimationFrame(() => {
      S.raf = 0;
      const p = S.ptr;
      if (p && Date.now() - S.ptrT < (mmToque.matches ? 2200 : 9000)) olharPara(p.x, p.y);
      else olharPara(null, null);
    });
  }

  /* ════ balão de fala ════ */
  function falar(texto, op = {}) {
    if (!texto || !S.montado) return false;
    const auto = !op.usuario;
    if (auto) {
      if (S.quieto && !op.mesmoQuieto) return false;
      if (S.modo === "sos" && !op.sos) return false;
      if (S.modo === "tunel") return false;
      if (!op.forte && Date.now() - S.ultimaFalaAuto < 9000) return false;
    }
    if (op.expr) reagir(op.expr, op.exprMs || 2600);
    const ms = op.ms || Math.min(13000, 3600 + texto.length * 55 + (op.acoes ? 4500 : 0));
    // com o card do QG à vista, o Breu está lá: o recado aparece no próprio card
    if (S.heroVisivel && S.hero && S.hero.isConnected) { if (auto) S.ultimaFalaAuto = Date.now(); heroMsg(texto, op.acoes || [], ms); return true; }
    if (!S.dock || S.dock.dataset.estado === "fora") return false;
    // espiando: rolando a tela ou digitando, só fala se a pessoa pediu; se era só para não cobrir um botão, levanta para falar
    if (S.dock.dataset.estado === "espiando" && (S.rolando || S.tecladoAberto) && !op.usuario && !op.sos) return false;
    if (!op.usuario && (S.critico || sobAArea(areaDoBalao(), 4, 2) === 2)) return false; // nada na frente do S.O.S
    if (!S.critico) {
      S.forcaDentro = Date.now() + ms;
      atualizarDock();
      depois(atualizarDock, ms + 80);
    }
    if (auto) S.ultimaFalaAuto = Date.now();
    S.falaChave = op.chave || "";
    const f = S.fala;
    cancelar(S.falaTimer);
    f.classList.remove("sai");
    f.querySelector(".breu-fala-txt").textContent = texto;
    const ac = f.querySelector(".breu-fala-acoes");
    ac.textContent = "";
    (op.acoes || []).forEach((a, i) => {
      const b = document.createElement("button"); b.type = "button"; b.textContent = a.t; if (i === 0) b.className = "on";
      b.addEventListener("click", ev => { ev.stopPropagation(); fecharFala(); a.fn && a.fn(); });
      ac.appendChild(b);
    });
    ac.hidden = !(op.acoes && op.acoes.length);
    f.hidden = false;
    f.style.animation = "none"; void f.offsetWidth; f.style.animation = "";
    S.falaTimer = depois(fecharFala, ms);
    return true;
  }
  function fecharFala() {
    const f = S.fala; if (!f || f.hidden) return;
    if (S.forcaDentro) { S.forcaDentro = 0; depois(atualizarDock, 60); }
    cancelar(S.falaTimer); f.classList.add("sai");
    depois(() => { if (f.classList.contains("sai")) { f.hidden = true; f.classList.remove("sai"); } }, 230);
  }

  /* ════ companheiro flutuante ════ */
  function criarDock() {
    const d = document.createElement("div");
    d.className = "breu-dock"; d.dataset.estado = "fora"; d.dataset.versao = S.versao;
    d.innerHTML = `<div class="breu-fala" role="status" aria-live="polite" hidden><span class="breu-fala-nome">Breu</span><p class="breu-fala-txt"></p><div class="breu-fala-acoes" hidden></div><button type="button" class="breu-fala-x" aria-label="Fechar recado do Breu">×</button></div><button type="button" class="breu-btn"><span class="breu-corpo"></span><span class="breu-fx" aria-hidden="true"><i style="--t:28%;--w:30px;--c:#00D1FF;--d:0s;--l:70px"></i><i style="--t:40%;--w:20px;--c:#FFFFFF;--d:.06s;--l:90px"></i><i style="--t:52%;--w:38px;--c:#D2456C;--d:.12s;--l:64px"></i><i style="--t:64%;--w:24px;--c:#00D1FF;--d:.04s;--l:96px"></i><i style="--t:76%;--w:16px;--c:#FFFFFF;--d:.16s;--l:72px"></i></span><span class="breu-zz" aria-hidden="true"><b>z</b><b>z</b><b>z</b></span></button>`;
    S.dock = d; S.btn = d.querySelector(".breu-btn"); S.fala = d.querySelector(".breu-fala");
    S.svgC = instancia("busto");
    d.querySelector(".breu-corpo").appendChild(S.svgC);
    rotularBotao();
    S.fala.querySelector(".breu-fala-x").addEventListener("click", e => { e.stopPropagation(); fecharFala(); });
    S.fala.addEventListener("click", e => { if (!e.target.closest(".breu-fala-acoes")) fecharFala(); });
    // toque: conversa; segurar (ou botão direito): pede silêncio / acorda
    let seg = 0, segurou = false, hov = 0, toqueEm = 0;
    S.btn.addEventListener("pointerdown", e => {
      cancelar(hov);
      if (e.pointerType !== "mouse") toqueEm = Date.now();
      if (e.button > 0) return;
      segurou = false; cancelar(seg);
      seg = depois(() => { segurou = true; alternarQuieto(); if (navigator.vibrate) try { navigator.vibrate(12); } catch (x) {} }, 650);
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach(ev => S.btn.addEventListener(ev, () => cancelar(seg)));
    S.btn.addEventListener("click", e => { if (segurou) { segurou = false; e.preventDefault(); return; } tocar(); });
    // botão direito (ou tecla de menu) pede silêncio; no toque longo quem cuida é o temporizador acima
    S.btn.addEventListener("contextmenu", e => { e.preventDefault(); if (Date.now() - toqueEm < 1500) return; cancelar(seg); alternarQuieto(); });
    S.btn.addEventListener("pointerenter", e => { if (e.pointerType !== "mouse") return; cancelar(hov); hov = depois(carinho, 1600); });
    S.btn.addEventListener("pointerleave", () => cancelar(hov));
    document.body.appendChild(d);
  }
  function rotularBotao() {
    if (!S.btn) return;
    S.btn.setAttribute("aria-label", S.quieto ? "Breu está descansando. Toque para acordar." : "Breu, seu parceiro no Ace Mind. Toque para conversar; segure para pedir silêncio.");
  }
  function estadoDock(e) {
    const d = S.dock; if (!d) return;
    if (S.quieto && e !== "fora") e = "quieto";
    if (d.dataset.estado === e) return;
    d.dataset.estado = e;
    if (e !== "dentro") fecharFala();
  }
  function atualizarDock() {
    if (!S.dock) return;
    let e = "dentro";
    const conversando = Date.now() < S.forcaDentro;
    if (S.heroVisivel) e = "fora";
    else if (S.critico || (!conversando && (S.tecladoAberto || (S.rolando && S.modo !== "sos") || S.bloqueando))) e = "espiando";
    estadoDock(e);
    S.dock.toggleAttribute("data-sono", S.quieto || S.dormindo);
  }

  /* o Breu nunca fica na frente de um botão ou campo: se houver algo clicável embaixo, ele só espia */
  const CLICAVEL = 'button, a[href], input, select, textarea, [role="button"], [role="tab"], .sos-btn, .check-tile, label, summary';
  const CRITICO = '.sos-btn, #sos-card, .am-tels, a[href^="tel:"], #am-sos-faixa';
  function areaDoDock() {
    const d = S.dock, tam = d.offsetWidth || 72, cs = getComputedStyle(d);
    const x = innerWidth - (parseFloat(cs.right) || 12) - tam, y = innerHeight - (parseFloat(cs.bottom) || 12) - tam;
    return { x, y, w: tam, h: tam };
  }
  /* o que está embaixo de uma área da tela: 0 nada clicável, 1 botão/campo, 2 área de emergência */
  function sobAArea(r, colunas = 3, linhas = 3) {
    let nivel = 0;
    for (let i = 0; i < colunas; i++) for (let j = 0; j < linhas; j++) {
      const px = r.x + r.w * (i + .5) / colunas, py = r.y + r.h * (j + .5) / linhas;
      if (px < 0 || py < 0 || px > innerWidth || py > innerHeight) continue;
      const alvo = document.elementsFromPoint(px, py).find(n => !S.dock.contains(n));
      if (!alvo || !alvo.closest) continue;
      if (alvo.closest(CRITICO)) return 2;
      if (alvo.closest(CLICAVEL)) nivel = 1;
    }
    return nivel;
  }
  function cobreAlgo() {
    const d = S.dock; if (!d || !d.isConnected) return 0;
    return sobAArea(areaDoDock());
  }
  /* área que o balão ocuparia (acima do Breu no celular, à esquerda no computador) */
  function areaDoBalao() {
    const a = areaDoDock(), w = Math.min(280, innerWidth - 24), h = 96;
    if (S.dock.dataset.estado === "espiando") a.y += a.h * .54;
    return innerWidth < 768 ? { x: innerWidth - 12 - w, y: a.y - 10 - h, w, h } : { x: a.x - 8 - w, y: a.y + a.h * .68 - h, w, h };
  }
  let ultimaCobertura = 0;
  function conferirCobertura(forcar) {
    if (!forcar && Date.now() - ultimaCobertura < 250) return;
    ultimaCobertura = Date.now();
    const n = cobreAlgo();
    if (n !== S.cobertura) { S.cobertura = n; S.bloqueando = n > 0; S.critico = n === 2; atualizarDock(); }
  }

  function tocar() {
    marcarAcao();
    if (S.quieto) { alternarQuieto(); return; }
    if (S.dormindo) { acordar(true); return; }
    S.forcaDentro = Date.now() + 9000; // tocou nele: fica de pé para conversar
    depois(atualizarDock, 9100);
    if (S.dock.dataset.estado === "espiando") { S.rolando = false; atualizarDock(); }
    const agora = Date.now();
    S.toquesRapidos = S.toquesRapidos.filter(t => agora - t < 1600); S.toquesRapidos.push(agora);
    if (S.toquesRapidos.length >= 3) {
      S.toquesRapidos = [];
      reagir(S.versao === "sub15" ? "vibra" : "garra", 1600);
      classe([S.dock.querySelector(".breu-corpo")], "breu-chacoalha", 520);
      falar(V(F.cocegas), { usuario: true });
      return;
    }
    if (!reduz()) classe([S.dock.querySelector(".breu-corpo")], "breu-pula", 900);
    reagir(sorteia(["vibra", "curioso", "garra", "foco"]), 1500);
    falar(proximoPapo(), { usuario: true });
  }
  function proximoPapo() { // "saco" embaralhado: não repete até passar por todas
    const lista = F.papo[S.versao === "sub15" ? "s" : "m"];
    if (!S.saco || !S.saco.length) S.saco = lista.map((_, i) => i).sort(() => Math.random() - .5);
    const t = lista[S.saco.pop()];
    return V({ s: t, m: t });
  }
  function carinho() {
    if (S.quieto || S.dormindo || S.modo) return;
    reagir("vibra", 1600);
    classe([S.dock.querySelector(".breu-corpo")], "breu-ronrona", 1200);
    falar(V(F.carinho), { usuario: true, ms: 1800 });
  }
  function alternarQuieto() {
    S.quieto = !S.quieto;
    salvarPref({ quieto: S.quieto });
    rotularBotao();
    if (S.quieto) {
      fecharFala(); S.dormindo = false;
      base("respira"); estadoDock("quieto");
      falar(V(F.quieto), { usuario: true, ms: 3200 });
      S.dock.dataset.estado = "quieto";
    } else {
      estadoDock("dentro"); atualizarDock();
      base(baseDaAba(S.aba));
      reagir("vibra", 1400);
      if (!reduz()) classe([S.dock.querySelector(".breu-corpo")], "breu-pula", 900);
      falar(V(F.acorda), { usuario: true });
    }
    atualizarDock();
  }

  /* ════ card do Breu no QG Mental ════ */
  function saudacao() {
    const h = new Date().getHours();
    if (aniversarioHoje(S.nasc)) return "Feliz aniversário, " + S.nome + "!";
    if (h < 5) return S.versao === "sub15" ? "Ei, " + S.nome + ", já é tarde!" : "Tá tarde, " + S.nome + ".";
    if (h < 12) return "Bom dia, " + S.nome + "!";
    if (h < 18) return "Boa tarde, " + S.nome + "!";
    return "Boa noite, " + S.nome + "!";
  }
  function criarHero() {
    const h = document.createElement("section");
    h.className = "breu-hero"; h.dataset.versao = S.versao; h.setAttribute("aria-label", "Recado do Breu");
    h.innerHTML = `<div class="breu-hero-barras" aria-hidden="true"><i></i><i></i><i></i></div><div class="breu-hero-txt"><p class="breu-hero-kicker"><span class="breu-chip"><span></span></span><span class="breu-hero-papel"></span></p><h3 class="breu-hero-tit"></h3><p class="breu-hero-msg"></p><div class="breu-hero-acoes"></div></div><div class="breu-hero-arte"><button type="button" class="breu-hero-btn" aria-label="Breu. Toque para conversar."><span class="breu-hero-corpo"></span><span class="breu-fx" aria-hidden="true"><i style="--t:30%;--w:34px;--c:#00D1FF;--d:0s;--l:80px"></i><i style="--t:44%;--w:22px;--c:#FFFFFF;--d:.06s;--l:100px"></i><i style="--t:58%;--w:40px;--c:#D2456C;--d:.12s;--l:70px"></i></span></button></div>`;
    h.querySelector(".breu-chip>span").textContent = S.versao === "sub15" ? "Sub-15" : "15+";
    h.querySelector(".breu-hero-papel").innerHTML = 'Breu<span class="breu-sm-oculto"> · seu parceiro</span>';
    S.svgH = instancia("corpo");
    h.querySelector(".breu-hero-corpo").appendChild(S.svgH);
    h.querySelector(".breu-hero-btn").addEventListener("click", () => {
      marcarAcao();
      if (S.quieto) { alternarQuieto(); return; }
      if (!reduz()) classe([h.querySelector(".breu-hero-corpo")], "breu-pula", 900);
      reagir(sorteia(["vibra", "curioso", "garra"]), 1500);
      if (S.versao === "sub15" && Math.random() < .5) classe([S.svgH], "acena", 1400);
      const t = proximoPapo();
      heroMsg(t, undefined, Math.min(12000, 4000 + t.length * 60));
    });
    S.hero = h;
    heroPadrao();
    return h;
  }
  let heroTroca = 0, heroVolta = 0;
  /* troca o recado do card; com "dura", é um recado passageiro e o card volta ao recado do dia */
  function heroMsg(texto, acoes, dura) {
    const h = S.hero; if (!h) return;
    const m = h.querySelector(".breu-hero-msg");
    cancelar(heroTroca); cancelar(heroVolta);
    m.classList.add("troca");
    heroTroca = depois(() => {
      m.textContent = texto; m.classList.remove("troca");
      if (acoes !== undefined) heroAcoes(acoes);
    }, reduz() ? 0 : 200);
    if (dura) heroVolta = depois(() => { heroVolta = 0; heroPadrao(true); }, dura);
  }
  function heroAcoes(acoes) {
    const box = S.hero.querySelector(".breu-hero-acoes");
    box.textContent = "";
    (acoes || []).forEach((a, i) => {
      const b = document.createElement("button"); b.type = "button"; b.className = i === 0 ? "btn-y" : "breu-link"; b.textContent = a.t;
      b.addEventListener("click", () => { marcarAcao(); if (heroVolta) { cancelar(heroVolta); heroVolta = 0; heroPadrao(true); } a.fn(); });
      box.appendChild(b);
    });
    box.hidden = !box.children.length;
  }
  function heroPadrao(forcar) {
    const h = S.hero; if (!h) return;
    if (heroVolta && !forcar) return; // um recado passageiro ainda está no card
    h.querySelector(".breu-hero-tit").textContent = saudacao();
    const temCk = !!document.getElementById("dr-sono"), temZr = !!document.getElementById("zr-btn");
    const hora = new Date().getHours();
    let msg, acoes = [];
    if (aniversarioHoje(S.nasc)) msg = V(F.hero.aniver);
    else if (temCk && S.ckFeito === false) msg = V(hora >= 22 || hora < 5 ? F.hero.pendente_tarde : F.hero.pendente);
    else if (temCk && S.ckFeito === true) msg = V(F.hero.feito);
    else if (temCk) msg = V(F.hero.pendente);
    else msg = V(F.hero.livre);
    if (temCk && S.ckFeito !== true) acoes.push({ t: "Fazer check-in", fn: irCheckin });
    if (temZr) acoes.push({ t: "Respirar comigo", fn: respirarJunto });
    const m = h.querySelector(".breu-hero-msg");
    if (m.textContent !== msg) heroMsg(msg, acoes); else heroAcoes(acoes);
  }
  function rolarAte(alvo) {
    const c = document.getElementById("mob-content"); if (!c || !alvo) return;
    const top = alvo.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop - 12;
    c.scrollTo({ top, behavior: reduz() ? "auto" : "smooth" });
  }
  function irCheckin() {
    const r = document.getElementById("dr-sono"); if (!r) return;
    rolarAte(r.closest(".am-card") || r);
    depois(() => { try { r.focus({ preventScroll: true }); } catch (e) {} falar(V(F.ck.arrasta), { forte: true, expr: "curioso" }); }, 700);
  }
  function respirarJunto() {
    const b = document.getElementById("zr-btn"); if (!b) return;
    rolarAte(b.closest(".a-up") || b);
    depois(() => { const bb = document.getElementById("zr-btn"); if (bb && /iniciar/i.test(bb.textContent)) bb.click(); }, 650);
  }
  function montarHero() {
    const c = document.getElementById("mob-content");
    const aba = (app() || {}).abaAtleta || S.aba;
    if (!c || aba !== "home" || !S.rig) return;
    if (S.hero && S.hero.parentNode === c && c.firstElementChild === S.hero) return;
    if (!S.hero) criarHero(); else heroPadrao();
    c.prepend(S.hero);
    S.hero.dataset.versao = S.versao;
    if (c.scrollTop < 80) S.heroVisivel = true; // no topo da aba: o Breu já está no card (o observador confirma)
    aplicar(S.expr);
    if (S.io) S.io.disconnect();
    S.io = new IntersectionObserver(es => {
      const vis = es.some(e => e.isIntersecting && e.intersectionRatio > .4);
      if (vis !== S.heroVisivel) {
        S.heroVisivel = vis;
        if (!vis && S.dock && !S.quieto && !reduz()) depois(() => { if (!S.heroVisivel && S.dock.dataset.estado === "dentro") classe([S.dock.querySelector(".breu-corpo")], "breu-susto", 420); }, 80);
        atualizarDock();
      }
    }, { root: c, threshold: [0, .4, .6] });
    S.io.observe(S.hero);
  }
  function soltarHero() {
    if (S.io) { S.io.disconnect(); S.io = null; }
    S.heroVisivel = false;
    if (S.hero && S.hero.parentNode) S.hero.remove();
  }

  /* ════ contexto: aba, modos e sinais vindos da tela ════ */
  const BASE_ABA = { home: "foco", pre: "garra", pos: "foco", treino: "garra", plano: "foco", agenda: "curioso", ia: "curioso", dados: "foco" };
  const baseDaAba = a => (S.quieto ? "respira" : BASE_ABA[a] || "foco");
  function mudouAba(a) {
    if (S.aba !== null) fecharFala();
    S.aba = a;
    S.chkFalado = false; S.resultado = "";
    if (a === "home") montarHero(); else soltarHero();
    if (!S.modo) base(baseDaAba(a));
    atualizarDock();
    const vistas = (sessao.get("abas") || "").split(",");
    if (F.abas[a] && !vistas.includes(a)) {
      depois(() => { if (S.aba === a && falar(V(F.abas[a]), { expr: BASE_ABA[a], forte: true })) sessao.set("abas", (sessao.get("abas") || "").split(",").concat(a).join(",")); }, 900);
    } else if (!reduz()) classe(instancias(), "orelha-" + (Math.random() < .5 ? "e" : "d"), 500);
  }
  function lerTela() {
    if (!S.montado) return;
    conferirCobertura();
    const A = app();
    const aba = (A && A.abaAtleta) || (document.querySelector(".mob-tb.on") || {}).dataset?.id || "home";
    if (aba !== S.aba) mudouAba(aba);
    if (aba === "home" && S.rig) montarHero();
    // check-in de hoje: feito ou pendente (lido da própria tela)
    if (aba === "home") {
      const c = document.getElementById("mob-content");
      let feito = null;
      if (c) {
        if (/Você já registrou hoje/.test(c.textContent)) feito = true;
        else if (/check-in de hoje/.test(c.textContent)) feito = false;
      }
      if (feito !== null && feito !== S.ckFeito) { S.ckFeito = feito; heroPadrao(); }
    }
    // S.O.S
    const st = sosStatus();
    const sosAtivo = ["enviando", "pendente", "em_atendimento", "falhou"].includes(st);
    if (sosAtivo && S.modo !== "sos") entrarModo("sos");
    else if (!sosAtivo && S.modo === "sos") sairModo();
    if (S.modo === "sos") {
      const chave = String(pegar(() => SOSA.id) || st);
      if (st === "pendente" && S.sosVisto !== chave) { S.sosVisto = chave; falar(V(F.sos), { sos: true, forte: true }); }
      base(st === "em_atendimento" || st === "falhou" ? "apoio" : "respira");
    }
    // Zone Reset (respiração guiada)
    const zb = document.getElementById("zr-btn");
    const zrOn = !!(zb && /parar/i.test(zb.textContent));
    if (zrOn) {
      const fase = (document.querySelector("#mob-content .zr-phase-label") || {}).textContent || "";
      const f = (fase.match(/INSPIRA|SEGURA|EXPIRA|PAUSA/) || [""])[0];
      if (S.modo !== "respira" && S.modo !== "sos") { entrarModo("respira"); falar(V(F.zr_ini), { forte: true }); }
      if (f && S.resp !== f) { S.resp = f; [S.dock, S.hero].filter(Boolean).forEach(n => n.dataset.resp = f); }
    } else if (S.modo === "respira") { sairModo(); reagir("vibra", 1800); falar(V(F.zr_fim), { forte: true }); }
    // Visão de Túnel
    const vb = document.getElementById("vt-btn");
    const tOn = !!(vb && /parar/i.test(vb.textContent));
    if (tOn && !S.modo) entrarModo("tunel");
    else if (!tOn && S.modo === "tunel") { sairModo(); reagir("garra", 1600); falar(V(F.tunel_fim), { forte: true }); }
    // checklist pré-competição completo
    if (aba === "pre" && !S.chkFalado) {
      const tiles = document.querySelectorAll("#mob-content .check-tile");
      if (tiles.length && Array.from(tiles).every(t => t.classList.contains("checked"))) { S.chkFalado = true; reagir("garra", 2400); festejar(); falar(V(F.checklist), { forte: true }); }
    }
    // análise de vídeo
    const ia = document.getElementById("ia-st");
    if (ia) {
      const t = ia.textContent || "";
      if (t !== S.iaTxt) {
        S.iaTxt = t;
        if (/Analisando|Extraindo/.test(t)) base("curioso");
        else if (/Análise pronta/.test(t)) { reagir("vibra", 2600); festejar(); falar(V(F.ia_pronta), { forte: true }); }
      }
    }
    // gravação de voz no Trunfo do Dia
    const mic = document.getElementById("d-mic");
    const grav = !!(mic && mic.classList.contains("recording"));
    if (grav !== !!S.gravando) {
      S.gravando = grav;
      if (grav) { base("curioso"); classe(instancias(), "orelha-e", 500); depois(() => classe(instancias(), "orelha-d", 500), 260); if (!sessao.get("ouvindo")) { sessao.set("ouvindo", "1"); falar(V(F.ck.ouvindo), { forte: true, ms: 2200 }); } }
      else if (!S.modo) base(baseDaAba(S.aba));
    }
  }
  function entrarModo(m) {
    S.modo = m;
    if (S.dock) S.dock.dataset.modo = m;
    instancias().forEach(s => s.classList.toggle("calmo", m === "sos" || m === "respira"));
    if (m === "respira") base("respira");
    if (m === "tunel") { base("foco"); fecharFala(); olharPara(null, null); }
    if (m === "sos") { fecharFala(); base("respira"); }
    atualizarDock();
  }
  function sairModo() {
    S.modo = null; S.resp = null;
    [S.dock, S.hero].filter(Boolean).forEach(n => { delete n.dataset.resp; delete n.dataset.modo; });
    instancias().forEach(s => s.classList.remove("calmo"));
    base(baseDaAba(S.aba));
    atualizarDock();
  }

  /* ── check-in: o Breu sente junto enquanto a pessoa arrasta as barras ── */
  const CK = {
    sono: v => v <= 3 ? ["sono", "sono_baixo"] : v >= 9 ? ["vibra", "sono_alto"] : null,
    foco: v => v <= 3 ? ["curioso", "foco_baixo"] : v >= 9 ? ["garra", "foco_alto"] : null,
    energia: v => v <= 3 ? ["sono", "energia_baixo"] : v >= 9 ? ["garra", "energia_alto"] : null,
    humor: v => v <= 3 ? ["apoio", "humor_baixo"] : v >= 9 ? ["vibra", "humor_alto"] : null,
    estresse: v => v >= 8 ? ["apoio", "estresse_alto"] : v <= 2 ? ["foco", "estresse_baixo"] : null,
    dor: v => v >= 7 ? ["apoio", "dor_forte"] : v >= 1 ? ["apoio", "dor_alguma"] : null
  };
  function sliderCheckin(campo, v) {
    if (S.falaChave === "ck:" + campo && S.fala && !S.fala.hidden) fecharFala(); // mexeu de novo: o recado anterior perdeu o sentido
    const r = CK[campo] && CK[campo](v);
    const exprVivo = r ? r[0] : (campo === "humor" && v >= 7 ? "vibra" : campo === "estresse" && v >= 6 ? "apoio" : "foco");
    reagir(exprVivo, 2200);
    cancelar(S.ckUltimo[campo]);
    S.ckUltimo[campo] = depois(() => {
      if (!r) return;
      const chave = r[1];
      if (S.ckFalado[chave]) return;
      S.ckFalado[chave] = true;
      const acoes = chave === "estresse_alto" && document.getElementById("zr-btn") ? [{ t: "Respirar comigo", fn: respirarJunto }] : undefined;
      falar(V(F.ck[chave]), { forte: chave === "estresse_alto" || chave === "dor_forte" || chave === "humor_baixo", expr: r[0], acoes, chave: "ck:" + campo });
    }, 900);
  }

  /* ── avisos do app (toasts): o Breu reage ao resultado das ações ── */
  function toast(t) {
    const txt = (t.textContent || "").trim(), tipo = t.classList.contains("erro") ? "erro" : t.classList.contains("ok") ? "ok" : "info";
    if (S.modo === "sos") return;
    if (/^Check-in salvo/.test(txt)) {
      S.ckFeito = true; depois(heroPadrao, 300);
      if (/equipe vai ver/.test(txt)) { reagir("apoio", 3200); falar(V(F.ck.salvo_alerta), { forte: true }); }
      else { reagir("vibra", 3000); festejar(); falar(V(F.ck.salvo), { forte: true }); }
      return;
    }
    if (/^Raio-X enviado/.test(txt)) {
      const r = S.resultado, k = /Vitória/.test(r) ? "vitoria" : /Derrota/.test(r) ? "derrota" : "outro";
      reagir(k === "vitoria" ? "vibra" : k === "derrota" ? "apoio" : "garra", 3000);
      if (k === "vitoria") festejar();
      falar(V(F.raiox[k]), { forte: true });
      return;
    }
    const tr = txt.match(/^Treino registrado: (\d+) UA/);
    if (tr) { reagir("garra", 2600); festejar(); falar(V(F.treino, { ua: tr[1] + " UA" }), { forte: true }); return; }
    if (tipo === "ok") reagir("vibra", 1600);
    else if (tipo === "erro") reagir("apoio", 2400);
    else reagir("curioso", 1600);
  }

  /* ════ repouso: boceja, cochila e acorda ════ */
  function marcarAcao() {
    S.ultimaAcao = Date.now();
    if (S.dormindo || S.bocejou) acordar(false);
  }
  function acordar(falando) {
    const estava = S.dormindo;
    S.dormindo = false; S.bocejou = false;
    if (!S.modo && !S.quieto) base(baseDaAba(S.aba));
    atualizarDock();
    if (!estava) return;
    reagir("curioso", 1200);
    if (!reduz() && S.dock) classe([S.dock.querySelector(".breu-corpo")], "breu-susto", 420);
    if (falando || !sessao.get("cochilou")) { sessao.set("cochilou", "1"); falar(V(F.cochilou), { usuario: !!falando, forte: true }); }
  }
  function cicloRepouso() {
    depois(() => {
      cicloRepouso();
      if (document.hidden || S.modo || S.quieto) return;
      const parado = Date.now() - S.ultimaAcao;
      if (parado > 100000 && !S.dormindo) { S.dormindo = true; base("respira"); fecharFala(); atualizarDock(); }
      else if (parado > 45000 && !S.bocejou && !S.dormindo) { S.bocejou = true; reagir("bocejo", 2200); depois(() => { if (S.bocejou && !S.dormindo && !S.modo) base("sono"); }, 2300); }
    }, 5000);
  }

  /* ════ ouvintes globais ════ */
  function ligarOuvintes() {
    ouvir(window, "pointermove", e => { S.ptr = { x: e.clientX, y: e.clientY }; S.ptrT = Date.now(); if (Date.now() - S.ultimaAcao > 1500) marcarAcao(); agendarOlhar(); }, { passive: true });
    ouvir(window, "pointerdown", e => {
      S.ptr = { x: e.clientX, y: e.clientY }; S.ptrT = Date.now(); marcarAcao(); agendarOlhar();
      if (e.target && e.target.closest && e.target.closest(".sos-btn")) { reagir("respira", 2600); fecharFala(); }
      depois(agendarOlhar, mmToque.matches ? 2300 : 9100);
    }, { passive: true, capture: true });
    ouvir(window, "keydown", e => { marcarAcao(); if (e.key === "Escape" && S.fala && !S.fala.hidden) fecharFala(); });
    ouvir(document, "input", e => {
      const t = e.target; if (!t || !t.id) return;
      marcarAcao();
      const m = t.id.match(/^dr-(sono|foco|energia|humor|estresse|dor)$/);
      if (m) { sliderCheckin(m[1], +t.value); return; }
      if (t.id === "rp-conf") reagir(+t.value >= 8 ? "garra" : +t.value <= 3 ? "apoio" : "foco", 1800);
    }, true);
    ouvir(document, "click", e => {
      const t = e.target && e.target.closest ? e.target.closest("[data-res],.check-tile") : null;
      if (!t) return;
      if (t.dataset.res) { S.resultado = t.dataset.res; reagir(/Vitória/.test(t.dataset.res) ? "vibra" : /Derrota/.test(t.dataset.res) ? "apoio" : "foco", 2000); }
      else reagir("garra", 900);
    }, true);
    ouvir(document, "focusin", e => {
      const t = e.target;
      if (!t || !t.matches) return;
      const texto = t.matches("textarea, input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]), select");
      if (texto && mmToque.matches && t.closest("#mob-content")) { S.tecladoAberto = true; atualizarDock(); }
      if (t.id === "d-pf" && !sessao.get("trunfo")) { sessao.set("trunfo", "1"); reagir("curioso", 2400); if (!mmToque.matches) falar(V(F.ck.trunfo), { forte: true }); }
      if (texto && !mmToque.matches) { const r = t.getBoundingClientRect(); S.ptr = { x: r.left + r.width / 2, y: r.top + r.height / 2 }; S.ptrT = Date.now(); agendarOlhar(); }
    }, true);
    ouvir(document, "focusout", () => { depois(() => { const a = document.activeElement; if (!(a && a.matches && a.matches("textarea, input:not([type=range]), select"))) { S.tecladoAberto = false; atualizarDock(); } }, 250); }, true);
    let ultimoTopo = 0, fimRolagem = 0;
    ouvir(document, "scroll", e => {
      const c = e.target;
      if (!c || c.id !== "mob-content") return;
      const y = c.scrollTop, dy = y - ultimoTopo; ultimoTopo = y;
      if (dy > 8 && !S.rolando) { S.rolando = true; atualizarDock(); }
      cancelar(fimRolagem);
      fimRolagem = depois(() => { S.rolando = false; conferirCobertura(true); atualizarDock(); }, 900);
      if (Date.now() - S.ultimaAcao > 1500) marcarAcao();
    }, { capture: true, passive: true });
    ouvir(document, "visibilitychange", () => {
      if (document.hidden) { S.escondidoEm = Date.now(); return; }
      if (S.escondidoEm && Date.now() - S.escondidoEm > 10 * 60000 && !S.modo) { marcarAcao(); reagir("curioso", 1500); falar(V(F.volta)); }
      S.escondidoEm = 0;
    });
    ouvir(window, "resize", () => { cancelar(S.rzT); S.rzT = depois(() => conferirCobertura(true), 200); }, { passive: true });
    ouvir(window, "offline", () => reagir("apoio", 2600));
    ouvir(window, "online", () => reagir("vibra", 1600));
    if (mmReduz.addEventListener) ouvir(mmReduz, "change", () => olharPara(null, null));

    // mudanças na tela do app (abas, cards, S.O.S, respiração...)
    let pend = false;
    const mo = new MutationObserver(() => {
      if (S.rig && !(S.hero && S.hero.isConnected)) montarHero(); // entra junto com os cards do QG, sem piscar
      if (pend) return; pend = true;
      requestAnimationFrame(() => { pend = false; lerTela(); });
    });
    mo.observe(document.getElementById("app"), { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["class"] });
    S.obs.push(mo);
    // avisos (toasts) e banners flutuantes do app
    const vistos = new WeakSet();
    const varrer = () => {
      document.querySelectorAll("#am-toasts .am-toast").forEach(t => { if (!vistos.has(t)) { vistos.add(t); toast(t); } });
      // banners do app no rodapé (instalar / nova versão): o Breu sobe só se o banner ficar embaixo dele
      const xDock = S.dock ? innerWidth - (parseFloat(getComputedStyle(S.dock).right) || 12) - (S.dock.offsetWidth || 72) : innerWidth;
      const b = Array.from(document.querySelectorAll("body > .am-flutua")).filter(x => x.getClientRects().length && x.getBoundingClientRect().right > xDock);
      const alto = b.reduce((m, x) => Math.max(m, x.getBoundingClientRect().height), 0);
      if (S.dock) S.dock.style.setProperty("--breu-elev", alto ? Math.round(alto + 12) + "px" : "0px");
    };
    document.querySelectorAll("#am-toasts .am-toast").forEach(t => vistos.add(t));
    const mb = new MutationObserver(varrer);
    mb.observe(document.body, { childList: true });
    const caixa = document.getElementById("am-toasts");
    if (caixa) mb.observe(caixa, { childList: true });
    const mbt = new MutationObserver(() => { const cx = document.getElementById("am-toasts"); if (cx && !cx.dataset.breu) { cx.dataset.breu = "1"; mb.observe(cx, { childList: true }); } });
    mbt.observe(document.body, { childList: true });
    S.obs.push(mb, mbt);
    varrer();
  }

  /* ════ montar / desmontar ════ */
  async function montar() {
    const A = app();
    if (!A || !A.user || S.montando) return;
    S.montando = true;
    S.uid = A.user.uid || "anon";
    S.nasc = A.user.nascimento || "";
    S.idade = idadeDe(S.nasc);
    S.versao = S.idade !== null && S.idade < 15 ? "sub15" : "15"; // sem data válida: versão 15+
    S.nome = primeiro(A.user.nome) || (S.versao === "sub15" ? "craque" : "atleta");
    const p = pref();
    S.quieto = !!p.quieto;
    try { S.rig = await carregarRig(S.versao); }
    catch (e) { S.montando = false; return; }
    const B = app();
    if (!B || !B.user || B.user.uid !== A.user.uid || !document.querySelector(".phone-header")) { S.montando = false; return; }
    S.montado = true; S.montando = false;
    S.base = S.quieto ? "respira" : "foco"; S.expr = S.base;
    criarDock();
    const c = document.getElementById("mob-content");
    if (c) c.classList.add("breu-folga");
    ligarOuvintes();
    cicloPiscar(); cicloOrelhas(); cicloRepouso();
    lerTela();
    atualizarDock();
    // entrada
    const primeiraVez = !p.intro, cresceu = p.versaoVista === "sub15" && S.versao === "15";
    salvarPref({ intro: true, versaoVista: S.versao });
    const aniver = aniversarioHoje(S.nasc) && p.aniver !== new Date().getFullYear();
    if (aniver) salvarPref({ aniver: new Date().getFullYear() });
    depois(() => {
      if (!S.montado) return;
      if (S.quieto) return;
      if (S.versao === "sub15" && S.svgH) classe([S.svgH], "acena", 1400);
      if (cresceu) { reagir("vibra", 3200); festejar(); falar(V(F.cresceu), { forte: true, acoes: [{ t: "Bora!", fn: () => reagir("garra", 1500) }] }); }
      else if (primeiraVez) { reagir("vibra", 2600); falar(V(F.intro), { forte: true, acoes: [{ t: S.versao === "sub15" ? "Oi, Breu!" : "Bora", fn: () => { reagir("vibra", 1500); festejar(); } }, { t: "Prefiro silêncio", fn: () => { if (!S.quieto) alternarQuieto(); } }] }); }
      else if (aniver) { reagir("vibra", 3000); festejar(); }
    }, 900);
  }
  function desmontar() {
    S.montado = false;
    S.timers.forEach(id => clearTimeout(id)); S.timers.clear();
    S.ouvintes.forEach(([a, ev, fn, op]) => a.removeEventListener(ev, fn, op)); S.ouvintes = [];
    S.obs.forEach(o => o.disconnect()); S.obs = [];
    if (S.raf) cancelAnimationFrame(S.raf); S.raf = 0;
    soltarHero(); S.hero = null; S.svgH = null;
    if (S.dock) S.dock.remove();
    const c = document.getElementById("mob-content"); if (c) c.classList.remove("breu-folga");
    Object.assign(S, { dock: null, btn: null, fala: null, svgC: null, aba: null, modo: null, resp: null, ckFeito: null, dormindo: false, bocejou: false, exprTimer: 0, falaTimer: 0, ckUltimo: {}, ckFalado: {}, gravando: false, iaTxt: "", tecladoAberto: false, rolando: false });
  }

  /* o app troca a tela inteira ao entrar/sair: confere se a visão do atleta está aberta */
  function conferir() {
    const A = app();
    const atleta = !!(A && A.user && A.cargo === "paciente" && document.querySelector(".phone-header") && document.getElementById("mob-content"));
    if (atleta && S.montado && A.user.uid !== S.uid) desmontar();
    if (atleta && !S.montado) montar();
    else if (!atleta && S.montado) desmontar();
    else if (atleta && S.montado) {
      const c = document.getElementById("mob-content");
      if (c && !c.classList.contains("breu-folga")) c.classList.add("breu-folga");
      if (S.dock && !S.dock.isConnected) document.body.appendChild(S.dock);
    }
  }
  function iniciar() {
    const raiz = document.getElementById("app");
    if (!raiz) return;
    let pend = false;
    new MutationObserver(() => { if (pend) return; pend = true; requestAnimationFrame(() => { pend = false; conferir(); }); }).observe(raiz, { childList: true });
    conferir();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
  window.Breu = { versao: VERSAO, reagir: (x, ms) => S.montado && reagir(x, ms), falar: t => S.montado && falar(String(t), { usuario: true }), estado: () => ({ montado: S.montado, versao: S.versao, expr: S.expr, aba: S.aba, modo: S.modo, quieto: S.quieto, idade: S.idade }) };
})();
