/* ════ Breu · mascote do Ace Mind ════
   Módulo independente do app.js: observa a tela e reage ao que a pessoa faz.
   Atleta: até 14 anos, Breu Sub-15 (breu-sub15.svg); a partir de 15, Breu humanoide (breu-15.svg).
     Card no QG Mental, companheiro flutuante nas outras abas, recados da equipe, sequência de check-ins,
     lembrete diário, ajuda nos estados vazios, nos recursos bloqueados, sem internet e nos termos (menores de 18).
   Equipe: assistente discreto com as pendências do dia e dicas de cada tela do painel.
   O Breu só lê o que a própria pessoa já pode ver, nunca grava no banco e guarda preferências só no aparelho. */
(function () {
  "use strict";
  const VERSAO = "1.1.0";
  const SCRIPT = document.currentScript;
  const BASE = SCRIPT && SCRIPT.src ? new URL(".", SCRIPT.src).href : "breu/";
  const NS = "http://www.w3.org/2000/svg";
  const mmReduz = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  const mmToque = window.matchMedia ? matchMedia("(pointer: coarse)") : { matches: false };
  const reduz = () => mmReduz.matches;

  /* ── acesso ao estado do app (variáveis globais do app.js) ── */
  const pegar = f => { try { return f(); } catch (e) { return undefined; } };
  /* global APP, SOSA, SP, FB, CFG, AMI, pode, alertasCk, lesaoAtiva, ehAdmin, isStaff, TREINO_TIPOS */
  const app = () => pegar(() => APP);
  const fb = () => pegar(() => FB);
  const sosStatus = () => pegar(() => SOSA.status) || "";
  const esporte = () => pegar(() => SP()) || { evento: "Competição", g: "f" };
  const podeVer = f => pegar(() => pode(f)) !== false;
  const icone = n => pegar(() => AMI(n)) || "";
  const irPara = aba => pegar(() => APP.irPara(aba));

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
  const p2 = n => String(n).padStart(2, "0");
  const diaLocal = (d = new Date()) => `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
  const diaDe = v => { const s = String(v || ""); const d = new Date(/^\d{4}-\d{2}-\d{2}$/.test(s) ? s + "T12:00:00" : s); return isNaN(d) ? "" : diaLocal(d); };
  const somaDia = (dia, n) => { const d = new Date(dia + "T12:00:00"); d.setDate(d.getDate() + n); return diaLocal(d); };
  const recente = (iso, dias) => { const t = Date.parse(iso); return !isNaN(t) && Date.now() - t < dias * 864e5; };
  const quando = iso => { const d = diaDe(iso), h = diaLocal(); if (!d) return ""; if (d === h) return "hoje"; if (d === somaDia(h, -1)) return "ontem"; return "em " + d.slice(8, 10) + "/" + d.slice(5, 7); };
  const hhmm = s => { const m = String(s || "").match(/T(\d{2}):(\d{2})/); return m ? m[1] + ":" + m[2] : ""; };
  const plural = (n, s, p) => `${n} ${n === 1 ? s : p}`;

  /* ── preferências no aparelho ── */
  const LSK = () => "breu_v1_" + (S.uid || "anon");
  function pref() { try { return JSON.parse(localStorage.getItem(LSK()) || "{}") || {}; } catch (e) { return {}; } }
  function salvarPref(p) { try { localStorage.setItem(LSK(), JSON.stringify({ ...pref(), ...p })); } catch (e) {} }
  const sessao = {
    get(k) { try { return sessionStorage.getItem("breu_" + k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem("breu_" + k, v); } catch (e) {} }
  };

  /* ════ falas do atleta (s = Sub-15, m = 15+) ════ */
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
      aniver: { s: "{idade} anos! Hoje o Breu tá vibrando por você.", m: "{idade} anos. Que venha a melhor temporada da sua vida." },
      offline: { s: "Tô sem internet, mas pode registrar: o check-in fica guardado aqui e vai quando a conexão voltar.", m: "Sem internet por enquanto. Pode registrar: o check-in fica no aparelho e é enviado quando a conexão voltar." }
    },
    /* recados da equipe: o Breu avisa quando alguém da equipe atualiza algo que o atleta vê */
    recado: {
      relatorio: { s: "{quem} deixou objetivos e recomendações novos pra você. Bora ver?", m: "{quem} atualizou seus objetivos e recomendações. Vale a leitura." },
      aquecimento: { s: "{quem} montou seu aquecimento! Tá na aba Pré.", m: "{quem} atualizou seu protocolo de aquecimento. Está na aba Pré." },
      lesao: { s: "{quem} deixou orientações sobre sua lesão ({local}). Dá uma olhada antes de treinar, tá?", m: "{quem} deixou orientações novas sobre sua lesão ({local}). Confira antes de treinar." }
    },
    recadoAba: {
      plano: { s: "Isso aqui é novo: a equipe atualizou {quando}.", m: "Atualizado {quando}. Lê com calma." },
      pre: { s: "Seu aquecimento tá aqui embaixo. Novinho!", m: "O protocolo novo está logo abaixo." },
      treino: { s: "As orientações estão em Lesões e restrições, aqui embaixo.", m: "As orientações estão em Lesões e restrições, logo abaixo." }
    },
    treinoHoje: { s: "Hoje tem treino: {titulo}. Depois me conta como foi, registrando a PSE em Treino.", m: "Hoje tem {titulo}. Quando terminar, registre duração e PSE em Treino: é isso que mostra sua carga." },
    treinoHojeTarde: { s: "E o treino de hoje ({titulo})? Se já fez, registra rapidinho em Treino!", m: "Fez o {titulo} hoje? Registre em Treino enquanto está fresco." },
    treinoAba: { s: "O de hoje é o {titulo}. Quando terminar, toca em Registrar como feito e marca a PSE.", m: "O de hoje: {titulo}. Ao terminar, toque em Registrar como feito e marque a PSE." },
    seq: {
      pendente: { s: "Faz o de hoje e chega a {n} dias seguidos!", m: "Faça o de hoje e chegue a {n} dias seguidos." },
      marco: { s: "{n} dias seguidos de check-in! Você tá voando!", m: "{n} dias seguidos de check-in. Isso é constância de atleta." }
    },
    lembrete: {
      oferta: { s: "Quer que eu te lembre do check-in todo dia? Você escolhe o horário.", m: "Quer um lembrete diário do check-in? Você escolhe o horário." },
      como: { s: "É só tocar em Ativar neste aparelho e escolher o horário.", m: "Toque em Ativar neste aparelho e escolha o horário do lembrete." }
    },
    offline: { s: "Fiquei sem internet. Pode continuar: check-in e Raio-X ficam guardados aqui e vão quando a conexão voltar.", m: "Sem internet. Pode seguir: check-in e Raio-X ficam salvos no aparelho e são enviados quando a conexão voltar." },
    bloqueado: { s: "Esse recurso faz parte do plano {plano}. Quem libera é a equipe AceMind.", m: "Esse recurso é do plano {plano}. Para liberar, fale com a equipe AceMind." },
    termos: {
      s: "Essa parte é com seu responsável: mãe, pai ou tutor. Chama ele pra ler os termos e preencher junto com você.",
      m: "Como você tem menos de 18 anos, um responsável legal precisa ler os termos e preencher esta parte junto com você."
    }
  };
  const MARCOS = [3, 7, 14, 21, 30, 50, 75, 100];

  /* ════ assistente da equipe ════ */
  const EQT = {
    intro: "Oi, {nome}! Sou o Breu, o mascote que acompanha os atletas no app. Por aqui eu mostro as pendências do dia e explico cada tela do painel.",
    carregando: "Conferindo o dia...",
    nada: "Nada pendente por enquanto.",
    padrao: "Escolha um item do menu: as dicas de cada tela aparecem aqui.",
    atletas: [
      "Até 14 anos, o atleta vê o Breu Sub-15; a partir de 15, o humanoide. A versão vem da data de nascimento do cadastro.",
      "No app, ele acompanha o check-in barra a barra, sugere respiração quando o estresse está alto, comemora conquistas e fica calmo durante um S.O.S.",
      "Ele avisa o atleta quando você atualiza objetivos e recomendações (Exportar Dossiê), o protocolo de aquecimento ou as orientações de uma lesão, e lembra o treino prescrito do dia.",
      "Nunca fica na frente do S.O.S nem dos telefones de emergência. Nada do que ele faz é gravado no banco."
    ]
  };
  /* dicas por tela do painel: t = título, d = dicas, l = telas relacionadas */
  const DICAS = {
    dashboard: { t: "Radar dos Atletas", d: [
      "Quem tem sinal de alerta aparece primeiro. O ponto colorido é o último check-in: vermelho pede atenção imediata, laranja é para acompanhar, verde está bem e cinza está sem check-in há 14 dias.",
      "“Sem check-in 3+ dias” mostra quem sumiu: vale um contato.",
      "Trunfo do dia é o melhor momento que o próprio atleta escreveu no check-in."], l: ["checkins", "dossie", "agenda"] },
    checkins: { t: "Check-ins", d: [
      "Filtre por atleta e período, ou marque “Só com sinais de alerta”.",
      "Prontidão é a média, de 0 a 10, de foco, energia, sono, humor, estresse invertido e dor invertida.",
      "O CSV exporta exatamente o que está filtrado, e a exportação fica registrada na Auditoria."], l: ["dashboard", "dash_chart"] },
    dash_chart: { t: "Dashboard Analítico", d: [
      "No radar, quanto mais longe do centro, melhor: estresse e dor entram invertidos (Calma e Corpo sem dor).",
      "Adesão é o número de dias com check-in no período.",
      "Estresse e dor começam escondidos no gráfico de linhas: toque na legenda para mostrar."], l: ["comparativo", "checkins"] },
    comparativo: { t: "Comparativo Multi-Atleta", d: [
      "Marque até 8 atletas e toque em Comparar.",
      "O gráfico mostra prontidão (0 a 10) e adesão ao check-in (%) lado a lado."], l: ["dash_chart", "dashboard"] },
    insights: { t: "Insights", d: [
      "Compara os últimos 7 dias com as 3 semanas anteriores de cada atleta; cada alerta mostra a regra usada.",
      "No resumo por IA, os nomes viram códigos (A1, A2...) antes do envio e só voltam no seu aparelho.",
      "É apoio: confira os dados do atleta antes de agir."], l: ["dashboard", "dossie"] },
    perfil: { t: "Perfil Esportivo", d: [
      "Modalidade, categoria, lateralidade e anamnese do atleta.",
      "A modalidade muda os textos do app do atleta (jogo, prova, luta...) e o que aparece no Raio-X.",
      "Lesões atuais ficam em Lesões & Avaliações; o histórico psicológico, no Prontuário (Psicologia)."], l: ["lesoes", "prontuario"] },
    prontuario: { t: "Prontuário", d: [
      "Cada profissão vê e escreve só as próprias áreas; cada registro guarda autor, profissão e data.",
      "O autor pode editar nas primeiras 24 horas; depois, só com adendo.",
      "Registro errado não é apagado: fica anulado, com o motivo, para manter o histórico."], l: ["registros", "dossie"] },
    registros: { t: "Registros Clínicos", d: [
      "Linha do tempo com os registros mais recentes das suas áreas, de todos os atletas.",
      "Para escrever um registro novo, use o Prontuário."], l: ["prontuario"] },
    lesoes: { t: "Lesões & Avaliações", d: [
      "Registre local, gravidade e status: afastado, em reabilitação, com restrição ou liberado.",
      "As orientações para o atleta aparecem no app dele, na aba Treino, e o Breu avisa quando você atualiza.",
      "Nas avaliações físicas, o atleta vê o último resultado e o anterior de cada teste.",
      "Lançou por engano? Anule: o registro continua no histórico."], l: ["treinos", "perfil"] },
    criticos: { t: "Pressão em Competição", d: [
      "Lance as competições com resultado e nível de confiança. O Raio-X que o atleta faz no app também entra aqui.",
      "Compare a confiança média nas vitórias com a das derrotas (ou fora do pódio): uma diferença grande sugere queda sob pressão."], l: ["dossie", "treino_mental"] },
    dossie: { t: "Dossiê do Atleta", d: [
      "Tudo do atleta numa tela: perfil, check-ins, competições, treino, lesões e as áreas do prontuário que você pode ver.",
      "Para gerar o PDF, use Exportar Dossiê.",
      "Cada abertura do dossiê fica registrada na Auditoria."], l: ["relatorios", "prontuario"] },
    atletas_pro: { t: "Atletas & Convites", d: [
      "Em Convidar atleta, ele recebe um e-mail para criar a senha. No primeiro acesso, aceita os termos; se tiver menos de 18, o responsável preenche junto.",
      "A data de nascimento define o Breu que o atleta vê: até 14 anos, o Sub-15; a partir de 15, o humanoide.",
      "Sequência é o número de dias seguidos com check-in. O atleta também vê a dele no app."], l: ["dashboard", "perfil"] },
    treinos: { t: "Treinos & Carga", d: [
      "Em + Prescrever, a sessão vai para a aba Treino do atleta, e o Breu lembra no dia.",
      "Quando o atleta registra duração e PSE, a carga entra aqui: minutos × PSE, em UA.",
      "Aguda:crônica entre 0,8 e 1,3 é a zona adequada; acima de 1,5 é salto de carga. Precisa de 3 semanas de registros.",
      "Use Duplicar +7 dias para repetir uma sessão na semana seguinte."], l: ["lesoes", "aquecimento"] },
    agenda: { t: "Agenda & Sessões", d: [
      "A sessão marcada aparece na agenda do atleta e no lembrete do dia, no app.",
      "Para sessão on-line, crie a sala (Meet, Zoom ou Teams) e cole o link https.",
      "Competições registradas aqui aparecem em Meu Plano para os atletas da modalidade.",
      "Ative as notificações para receber um lembrete 30 minutos antes."], l: ["calendarios", "notificacoes"] },
    calendarios: { t: "Calendários dos Atletas", d: [
      "Calendário semanal de cada atleta, com eventos e sessões.",
      "Eventos criados pela equipe não podem ser apagados pelo atleta."], l: ["agenda"] },
    aquecimento: { t: "Aquecimento & Rotinas", d: [
      "O protocolo salvo aparece para o atleta na aba Pré, e o Breu avisa que tem novidade.",
      "As rotinas de ativação (ritual pré e reset pós-erro) aparecem no Cofre Tático do atleta.",
      "Sem protocolo, o atleta vê um aviso de que a equipe ainda não definiu."], l: ["treinos", "protocolos"] },
    protocolos: { t: "Protocolos de Treino", d: [
      "Monte protocolos com passos (arraste para reordenar) e reutilize com qualquer atleta.",
      "Em Executar, siga passo a passo com cronômetro; o microfone transcreve as observações.",
      "Ao concluir, a execução fica registrada."], l: ["treino_mental"] },
    treino_mental: { t: "Treino Mental", d: [
      "Registre sessões de visualização, respiração, autoconversa, atenção, ativação ou mindfulness.",
      "Duração, intensidade e notas ficam no histórico do atleta."], l: ["protocolos", "criticos"] },
    ia_analise: { t: "Análise com IA", d: [
      "Escolha o atleta e o vídeo (até 100 MB): o app extrai alguns quadros e a IA aponta pontos fortes, o que melhorar e um plano de ação.",
      "A análise salva aparece para o atleta em Vídeo & IA.",
      "É apoio técnico: revise antes de usar com o atleta."], l: ["video_comp"] },
    video_comp: { t: "Comparar Análises", d: [
      "Escolha duas análises do mesmo atleta para ver a evolução, antes e depois."], l: ["ia_analise"] },
    relatorios: { t: "Exportar Dossiê", d: [
      "Escolha atleta, período e seções; a prévia mostra o documento como vai sair.",
      "Objetivos e Recomendações são salvos quando você baixa ou imprime: o atleta vê em Meu Plano e o Breu avisa a novidade.",
      "Cada exportação fica registrada na Auditoria."], l: ["dossie"] },
    exportar: { t: "Exportar Dados (CSV)", d: [
      "Escolha o conjunto de dados, o atleta e o período.",
      "O arquivo tem dados pessoais e de saúde: guarde em local protegido e apague quando não usar mais. A exportação fica na Auditoria."], l: ["checkins"] },
    sos: { t: "Central S.O.S", d: [
      "O painel confere novos alertas a cada 15 segundos, com som e aviso do navegador.",
      "Em Estou cuidando, o atleta vê no app que você recebeu o alerta.",
      "No app do atleta, o Breu fica calmo e incentiva a respiração; os telefones do CVV (188) e do SAMU (192) aparecem sempre.",
      "Para receber com o app fechado, ative as notificações deste aparelho."], l: ["notificacoes"] },
    notificacoes: { t: "Notificações", d: [
      "Ative em cada aparelho onde quer receber. No iPhone, instale o app na tela de início antes (iOS 16.4 ou mais recente).",
      "S.O.S sempre avisa toda a equipe; os outros alertas você escolhe.",
      "Os atletas escolhem o horário do lembrete do check-in em Meus dados, e o Breu sugere ativar."], l: ["sos"] },
    admin: { t: "Usuários & Planos", d: [
      "O cargo define o que cada pessoa vê. Admin abre esta área de sistema, mas não abre registros clínicos de outras profissões.",
      "A pessoa convidada recebe um e-mail para criar a senha e, no primeiro acesso, assina o compromisso de sigilo.",
      "Precisa haver sempre pelo menos uma pessoa na administração."], l: ["permissoes", "seguranca"] },
    permissoes: { t: "Permissões dos Planos", d: [
      "Defina o plano mínimo de cada recurso do app do atleta e do painel.",
      "O S.O.S é um recurso de segurança: bloquear por plano pode deixar atletas sem canal de ajuda."], l: ["admin"] },
    seguranca: { t: "Segurança & Privacidade", d: [
      "Preencha empresa, encarregado de dados (DPO) e e-mail de privacidade.",
      "Escolha o tempo de inatividade da equipe e se atletas podem criar conta sozinhos.",
      "A chave pública das notificações vai aqui; a privada fica só nas funções de servidor."], l: ["auditoria", "lgpd"] },
    auditoria: { t: "Auditoria", d: [
      "Quem fez o quê e quando: acessos a dossiês, exportações, mudanças de cargo e mais.",
      "Os registros não podem ser apagados nem alterados, nem pela administração."], l: ["seguranca"] },
    lgpd: { t: "Pedidos LGPD", d: [
      "Responda em até 15 dias; o prazo vencido aparece no pedido.",
      "Na exclusão, os registros clínicos ficam guardados e bloqueados pelo prazo legal.",
      "A resposta que você escreve aparece para o titular no app."], l: ["auditoria", "seguranca"] },
    saude: { t: "Saúde do Sistema", d: [
      "Confira se as funções de servidor estão respondendo.",
      "Migrar dados é feito uma vez só, depois de publicar as regras novas do banco.",
      "Os erros dos últimos 14 dias aparecem agrupados, sem conteúdo pessoal."], l: ["seguranca"] }
  };

  /* ════ estado ════ */
  const S = {
    montado: false, montando: false, visao: null, versao: null, uid: null, nome: "", idade: null, nasc: "",
    rig: null, dock: null, btn: null, fala: null, falaTimer: 0, svgC: null,
    hero: null, svgH: null, heroVisivel: false, io: null, extras: new Set(),
    base: "foco", expr: "foco", exprTimer: 0, aba: null,
    modo: null, resp: null, sosVisto: "", ultimaFalaAuto: 0,
    ultimaAcao: Date.now(), bocejou: false, dormindo: false, quieto: false,
    escondidoEm: 0, toquesRapidos: [], ckFeito: null, resultado: "",
    ptr: null, ptrT: 0, raf: 0, timers: new Set(), obs: [], ouvintes: [],
    ckUltimo: {}, ckFalado: {}, chkFalado: false, bloqueando: false, critico: false, cobertura: 0, forcaDentro: 0, fila: []
  };
  /* novidades do atleta (carregadas uma vez por sessão) */
  const N = { carregado: false, recados: [], treinoHoje: null, seq: 0, seqHoje: false };
  /* assistente da equipe */
  const EQ = { card: null, pill: null, painel: null, ovl: null, avs: [], pend: null, carregando: false, abaHelp: null, origem: null };

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
  /* espera algo aparecer na tela (o app desenha as abas de forma assíncrona) */
  function esperar(cond, ms = 4000) {
    return new Promise(ok => {
      const fim = Date.now() + ms;
      const tenta = () => { let r = null; try { r = cond(); } catch (e) {} if (r) return ok(r); if (Date.now() > fim || !S.montado) return ok(null); depois(tenta, 120); };
      tenta();
    });
  }

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
  /* tipo "busto": cabeça e ombros num anel ciano e vermelho (avatar); "corpo": como no card do QG; "inteiro": da cabeça aos pés */
  function instancia(tipo, rig, expr) {
    const P = "br" + (++seq) + "-";
    const svg = document.importNode(rig || S.rig, true);
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
      if (tipo !== "inteiro") svg.setAttribute("viewBox", svg.getAttribute("data-vb-corpo")); // "inteiro" mantém o personagem da cabeça aos pés
      svg.setAttribute("preserveAspectRatio", "xMidYMax meet");
    }
    svg.setAttribute("data-x", expr || S.expr);
    return svg;
  }
  /* todas as cópias do Breu na tela piscam, olham e mudam de expressão juntas */
  const instancias = () => {
    const l = [];
    if (S.svgC && S.svgC.isConnected) l.push(S.svgC);
    if (S.svgH && S.svgH.isConnected) l.push(S.svgH);
    EQ.avs.forEach(s => { if (s.isConnected) l.push(s); });
    S.extras.forEach(s => { if (s.isConnected) l.push(s); else S.extras.delete(s); });
    return l;
  };

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
    const versao = svg.getAttribute("data-versao") || S.versao;
    return { x: r.left + ox + (300 - vb[0]) * k, y: r.top + oy + ((OLHO_Y[versao] || 130) - vb[1]) * k };
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
    if (!texto || !S.montado || S.visao !== "atleta") return false;
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
    if (S.heroVisivel && S.hero && S.hero.isConnected) { if (auto) S.ultimaFalaAuto = Date.now(); heroMsg(texto, op.acoes || [], ms); if (op.aoMostrar) op.aoMostrar(); return true; }
    if (!S.dock || S.dock.dataset.estado === "fora") return false;
    // recado importante que não pode aparecer agora espera a vez (até 15 s) em vez de se perder
    const guardar = () => { if (op.forte && auto) { S.fila = S.fila.filter(x => x.texto !== texto).concat({ texto, op, ate: op._ate || Date.now() + 15000 }).slice(-3); } return false; };
    // espiando: rolando a tela ou digitando, só fala se a pessoa pediu; se era só para não cobrir um botão, levanta para falar
    if (S.dock.dataset.estado === "espiando" && (S.rolando || S.tecladoAberto) && !op.usuario && !op.sos) return guardar();
    if (!op.usuario && (S.critico || sobAArea(areaDoBalao(), 4, 2) === 2)) return guardar(); // nada na frente do S.O.S
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
    if (op.aoMostrar) op.aoMostrar();
    return true;
  }
  /* fala o próximo recado da fila quando o Breu pode aparecer de novo */
  function soltarFila(estado) {
    if (!S.fila.length || S.critico || S.rolando || S.tecladoAberto || S.quieto || S.modo) return;
    if (!(S.heroVisivel || estado === "dentro" || estado === "espiando")) return;
    if (S.fala && !S.fala.hidden) return;
    S.fila = S.fila.filter(x => Date.now() < x.ate);
    const x = S.fila.shift(); if (!x) return;
    depois(() => { if (S.montado) falar(x.texto, { ...x.op, _ate: x.ate }); }, 350); // mantém o prazo original
  }
  function fecharFala() {
    const f = S.fala; if (!f || f.hidden) return;
    if (S.forcaDentro || S.fila.length) { S.forcaDentro = 0; depois(atualizarDock, 300); }
    cancelar(S.falaTimer); f.classList.add("sai");
    depois(() => { if (f.classList.contains("sai")) { f.hidden = true; f.classList.remove("sai"); } }, 230);
  }

  /* ════ companheiro flutuante (atleta) ════ */
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
    soltarFila(e);
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
    if (!S.dock) return;
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
    // com recado da equipe ainda não visto, o toque leva até ele
    const r = recadoAtual();
    if (r && S.aba !== ABA_RECADO[r.tipo]) { falar(textoRecado(r), { usuario: true, acoes: [{ t: BOTAO_RECADO[r.tipo], fn: () => abrirRecado(r) }] }); return; }
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
  /* o recado do dia: o mais importante agora */
  function heroPadrao(forcar) {
    const h = S.hero; if (!h) return;
    if (heroVolta && !forcar) return; // um recado passageiro ainda está no card
    h.querySelector(".breu-hero-tit").textContent = saudacao();
    atualizarSeqChip();
    const temCk = !!document.getElementById("dr-sono"), temZr = !!document.getElementById("zr-btn");
    const hora = new Date().getHours(), A = app() || {};
    const rec = recadoAtual(), ckPend = temCk && S.ckFeito !== true;
    let msg, acoes = [];
    if (aniversarioHoje(S.nasc)) msg = V(F.hero.aniver);
    else if (A.offline || navigator.onLine === false) msg = V(F.hero.offline);
    else if (rec) { msg = textoRecado(rec); acoes.push({ t: BOTAO_RECADO[rec.tipo], fn: () => abrirRecado(rec) }); }
    else if (ckPend) {
      msg = V(hora >= 22 || hora < 5 ? F.hero.pendente_tarde : F.hero.pendente);
      if (N.seq >= 2 && !N.seqHoje) msg += " " + V(F.seq.pendente, { n: N.seq + 1 });
    }
    else if (N.treinoHoje && temCk) { msg = V(hora >= 17 ? F.treinoHojeTarde : F.treinoHoje, { titulo: N.treinoHoje.titulo }); acoes.push({ t: "Abrir treinos", fn: () => irPara("treino") }); }
    else if (temCk) msg = V(F.hero.feito);
    else msg = V(F.hero.livre);
    if (ckPend) acoes.push({ t: "Fazer check-in", fn: irCheckin });
    if (temZr && acoes.length < 2) acoes.push({ t: "Respirar comigo", fn: respirarJunto });
    const m = h.querySelector(".breu-hero-msg");
    if (m.textContent !== msg) heroMsg(msg, acoes); else heroAcoes(acoes);
  }
  /* chip com a sequência de check-ins (a mesma conta que a equipe vê em Atletas & Convites) */
  function atualizarSeqChip() {
    const h = S.hero; if (!h) return;
    let chip = h.querySelector(".breu-seq");
    const n = N.seq || 0;
    if (n >= 2) {
      if (!chip) { chip = document.createElement("span"); chip.className = "streak-badge breu-seq"; h.querySelector(".breu-hero-kicker").appendChild(chip); }
      const txt = `${n} dias seguidos`;
      if (chip.getAttribute("aria-label") !== txt) { chip.innerHTML = `${icone("flame")}<span>${n} dias</span><span class="breu-seq-l">seguidos</span>`; chip.setAttribute("aria-label", txt); chip.setAttribute("role", "img"); }
    } else if (chip) chip.remove();
  }
  function rolarAte(alvo) {
    const c = document.getElementById("mob-content"); if (!c || !alvo) return;
    const top = alvo.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop - 12;
    c.scrollTo({ top, behavior: reduz() ? "auto" : "smooth" });
  }
  function destacar(alvo) { if (!alvo) return; classe([alvo], "breu-destaque", 2600); }
  function cardPorTitulo(re) {
    return Array.from(document.querySelectorAll("#mob-content .am-card")).find(c => re.test(((c.querySelector(".am-tit span") || {}).textContent) || "")) || null;
  }
  function irCheckin() {
    const r = document.getElementById("dr-sono");
    if (!r) { // está em outra aba: volta ao QG primeiro
      irPara("home");
      esperar(() => document.getElementById("dr-sono")).then(x => { if (x) irCheckin(); });
      return;
    }
    rolarAte(r.closest(".am-card") || r);
    depois(() => { try { r.focus({ preventScroll: true }); } catch (e) {} falar(V(F.ck.arrasta), { forte: true, expr: "curioso" }); }, 700);
  }
  function respirarJunto() {
    const b = document.getElementById("zr-btn"); if (!b) return;
    rolarAte(b.closest(".a-up") || b);
    depois(() => { const bb = document.getElementById("zr-btn"); if (bb && /iniciar/i.test(bb.textContent)) bb.click(); }, 650);
  }
  function irRaioX() {
    const t = document.getElementById("rp-torn"); if (!t) return;
    rolarAte(t.closest(".am-card") || t);
    depois(() => { try { t.focus({ preventScroll: true }); } catch (e) {} }, 600);
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

  /* ════ novidades do atleta: recados da equipe, treino de hoje e sequência ════ */
  const ABA_RECADO = { relatorio: "plano", aquecimento: "pre", lesao: "treino" };
  const BOTAO_RECADO = { relatorio: "Ver meu plano", aquecimento: "Ver aquecimento", lesao: "Ver orientações" };
  const CARD_RECADO = { relatorio: /Objetivos e recomendações/i, aquecimento: /Aquecimento/i, lesao: /Lesões e restrições/i };
  const vistos = () => pref().vistos || {};
  function recadoAtual() { const v = vistos(); return N.recados.find(r => v[r.tipo] !== r.em) || null; }
  function recadoDaAba(a) { const v = vistos(); return N.recados.find(r => ABA_RECADO[r.tipo] === a && v[r.tipo] !== r.em) || null; }
  function marcarVisto(r) { const v = vistos(); if (v[r.tipo] === r.em) return; v[r.tipo] = r.em; salvarPref({ vistos: v }); }
  function textoRecado(r) { return V(F.recado[r.tipo], { quem: r.quem ? primeiro(r.quem) : "A equipe", local: r.local || "", quando: quando(r.em) }); }
  function abrirRecado(r) { marcarAcao(); irPara(ABA_RECADO[r.tipo]); }
  /* chegou na aba do recado: marca como visto, rola até o card e explica */
  function mostrarRecadoNaAba(a) {
    const r = recadoDaAba(a); if (!r) return false;
    marcarVisto(r);
    depois(() => {
      if (S.aba !== a) return;
      const card = cardPorTitulo(CARD_RECADO[r.tipo]);
      if (card) { rolarAte(card); destacar(card); }
      falar(V(F.recadoAba[a], { quando: quando(r.em) }), { forte: true, expr: "curioso" });
    }, 700);
    return true;
  }
  async function carregarNovidades() {
    const A = app(), B = fb(), uid = S.uid;
    if (!A || !B || A.offline || navigator.onLine === false || !uid) return;
    const ok = p => Promise.resolve(p).catch(() => null);
    const [pr, aq, les, trs, cks] = await Promise.all([
      podeVer("meuPlano") ? ok(B.getDoc(`prontuarios/${uid}`)) : null,
      podeVer("aquecAtleta") ? ok(B.getDoc(`atletas/${uid}/planos/aquecimento`)) : null,
      podeVer("treinoAtleta") ? ok(B.query(`atletas/${uid}/lesoes`, null, null, null, null, "DESCENDING", 60, true)) : null,
      podeVer("treinoAtleta") ? ok(B.query(`atletas/${uid}/treinos`, "status", "==", "prescrito", null, "DESCENDING", 80, true)) : null,
      ok(B.query("checkins", "pacienteId", "==", uid, "data", "DESCENDING", 45, true))
    ]);
    if (!S.montado || S.uid !== uid) return;
    const rec = [];
    const r = pr && pr.relatorio;
    if (r && (r.objetivos || r.recomendacoes) && r.atualizadoEm && recente(r.atualizadoEm, 14)) rec.push({ tipo: "relatorio", em: r.atualizadoEm, quem: r.por });
    if (aq && (aq.titulo || aq.exercicios) && aq.atualizadoEm && recente(aq.atualizadoEm, 14)) rec.push({ tipo: "aquecimento", em: aq.atualizadoEm, quem: aq.atualizadoPor });
    const ativas = (les || []).filter(l => l && !l.anulada && l.status && l.status !== "liberado" && l.orientacoes)
      .map(l => ({ l, em: l.atualizadoEm || l.criadoEm || "" })).filter(x => x.em && recente(x.em, 14)).sort((a, b) => String(b.em).localeCompare(String(a.em)));
    if (ativas.length) rec.push({ tipo: "lesao", em: ativas[0].em, quem: ativas[0].l.atualizadoPor || ativas[0].l.autorNome, local: ativas[0].l.local || "" });
    // a lesão vem antes (segurança); depois o mais recente
    N.recados = rec.sort((a, b) => (b.tipo === "lesao") - (a.tipo === "lesao") || String(b.em).localeCompare(String(a.em)));
    definirTreinoHoje(trs);
    if (cks) {
      const dias = new Set(cks.map(c => diaDe(c.data)).filter(Boolean));
      let d = diaLocal(); N.seqHoje = dias.has(d); if (!N.seqHoje) d = somaDia(d, -1);
      let n = 0; while (dias.has(d)) { n++; d = somaDia(d, -1); }
      N.seq = n;
    }
    N.carregado = true;
    if (S.aba === "home") heroPadrao();
    else if (!mostrarRecadoNaAba(S.aba)) {
      const r1 = recadoAtual();
      if (r1 && !sessao.get("recado:" + r1.tipo + r1.em)) {
        sessao.set("recado:" + r1.tipo + r1.em, "1");
        depois(() => falar(textoRecado(r1), { forte: true, expr: "curioso", acoes: [{ t: BOTAO_RECADO[r1.tipo], fn: () => abrirRecado(r1) }] }), 1200);
      }
    }
  }
  function definirTreinoHoje(trs) {
    if (!trs) return;
    const hoje = diaLocal();
    const t = trs.filter(x => String(x.data || "").slice(0, 10) === hoje && x.status === "prescrito")[0];
    N.treinoHoje = t ? { titulo: t.titulo || pegar(() => TREINO_TIPOS[t.tipo]) || "Treino" } : null;
  }
  async function recarregarTreinoHoje() {
    const B = fb(); if (!B || !S.uid || !podeVer("treinoAtleta")) return;
    const trs = await Promise.resolve(B.query(`atletas/${S.uid}/treinos`, "status", "==", "prescrito", null, "DESCENDING", 80, true)).catch(() => null);
    if (S.montado) { definirTreinoHoje(trs); heroPadrao(); }
  }
  /* lembrete diário do check-in (notificações): o Breu só oferece; quem ativa é a pessoa, em Meus dados */
  async function lembreteOferecivel() {
    const p = pref(), agora = Date.now();
    if (p.lembreteNao && agora - p.lembreteNao < 30 * 864e5) return false;
    if (p.lembreteOferta && agora - p.lembreteOferta < 7 * 864e5) return false;
    if (window.AM_DEMO || !("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) return false;
    if (!pegar(() => CFG.publico.vapidPublica) || Notification.permission === "denied") return false;
    const reg = await navigator.serviceWorker.getRegistration().catch(() => null);
    if (!reg || !reg.pushManager) return false;
    const sub = await reg.pushManager.getSubscription().catch(() => null);
    return !sub;
  }
  async function ofertarLembrete() {
    if (!S.montado || S.quieto || S.modo || !(await lembreteOferecivel())) return;
    falar(V(F.lembrete.oferta), { forte: true, expr: "curioso", aoMostrar: () => salvarPref({ lembreteOferta: Date.now() }), acoes: [{ t: "Quero", fn: irParaNotificacoes }, { t: "Agora não", fn: () => salvarPref({ lembreteNao: Date.now() }) }] });
  }
  function irParaNotificacoes() {
    marcarAcao();
    S.semBoasVindas = "dados"; // a explicação certa vem logo abaixo, no lugar das boas-vindas da aba
    irPara("dados");
    esperar(() => document.querySelector("#md-push #pu-on, #md-push .am-dica"), 6000).then(x => {
      const box = document.getElementById("md-push"); if (!x || !box) return;
      const card = box.closest(".am-card") || box;
      rolarAte(card); destacar(card);
      depois(() => falar(V(F.lembrete.como), { forte: true, expr: "foco" }), 600);
    });
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
    if (mostrarRecadoNaAba(a)) return;
    if (a === "treino" && N.treinoHoje && !sessao.get("treinoAba" + diaLocal())) {
      sessao.set("treinoAba" + diaLocal(), "1");
      depois(() => { if (S.aba === "treino" && N.treinoHoje) falar(V(F.treinoAba, { titulo: N.treinoHoje.titulo }), { forte: true, expr: "garra" }); }, 900);
      return;
    }
    if (S.semBoasVindas === a) { S.semBoasVindas = null; return; }
    const vistas = (sessao.get("abas") || "").split(",");
    if (F.abas[a] && !vistas.includes(a)) {
      depois(() => { if (S.aba === a && falar(V(F.abas[a]), { expr: BASE_ABA[a], forte: true })) sessao.set("abas", (sessao.get("abas") || "").split(",").concat(a).join(",")); }, 900);
    } else if (!reduz()) classe(instancias(), "orelha-" + (Math.random() < .5 ? "e" : "d"), 500);
  }
  function lerTela() {
    if (!S.montado || S.visao !== "atleta") return;
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
    decorarVaziosAtleta();
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
    if (S.visao === "equipe") { // na equipe, só uma reação discreta
      if (tipo === "ok") { reagir("vibra", 1300); if (EQ.pend) EQ.pend.em = 0; } else if (tipo === "erro") reagir("apoio", 1800);
      return;
    }
    if (S.modo === "sos") return;
    if (/^Check-in salvo/.test(txt)) {
      S.ckFeito = true;
      const alerta = /equipe vai ver/.test(txt);
      let marco = 0;
      if (N.carregado && !N.seqHoje) {
        N.seq += 1; N.seqHoje = true;
        const chave = N.seq + "@" + diaLocal();
        if (MARCOS.includes(N.seq) && pref().marco !== chave) { marco = N.seq; salvarPref({ marco: chave }); }
      }
      atualizarSeqChip();
      depois(heroPadrao, 300);
      if (alerta) { reagir("apoio", 3200); falar(V(F.ck.salvo_alerta), { forte: true }); }
      else if (marco) { reagir("vibra", 3600); festejar(); falar(V(F.seq.marco, { n: marco }), { forte: true }); }
      else { reagir("vibra", 3000); festejar(); falar(V(F.ck.salvo), { forte: true }); }
      if (!alerta) depois(ofertarLembrete, 7000);
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
    if (tr) { reagir("garra", 2600); festejar(); falar(V(F.treino, { ua: tr[1] + " UA" }), { forte: true }); depois(recarregarTreinoHoje, 1500); return; }
    if (tipo === "ok") reagir("vibra", 1600);
    else if (tipo === "erro") reagir("apoio", 2400);
    else reagir("curioso", 1600);
  }

  /* ════ estados vazios com o Breu: um atalho para o próximo passo ════ */
  function decorarVazio(p, o) {
    p.setAttribute("data-breu", "1"); p.classList.add("breu-vazio");
    const av = document.createElement("span"); av.className = "breu-vazio-av"; av.setAttribute("aria-hidden", "true");
    const svg = instancia("busto", null, o.x || "curioso"); av.appendChild(svg); S.extras.add(svg);
    const txt = document.createElement("span"); txt.className = "breu-vazio-txt";
    while (p.firstChild) txt.appendChild(p.firstChild);
    p.append(av, txt);
    if (o.b) {
      const b = document.createElement("button"); b.type = "button"; b.className = "breu-vazio-btn"; b.textContent = o.b;
      b.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); o.fn(); });
      txt.appendChild(b);
    }
  }
  const VAZIOS_ATLETA = [
    { card: /Analytics/i, b: "Fazer check-in", fn: irCheckin },
    { card: /Gráfico de Evolução/i, b: "Fazer check-in", fn: irCheckin },
    { card: /Sala de Troféus/i, quando: () => !!document.getElementById("rp-torn"), b: "Registrar Raio-X", fn: irRaioX },
    { card: /Análises de vídeo/i, quando: () => !!document.getElementById("ia-file"), b: "Enviar vídeo", fn: () => { const f = document.getElementById("ia-file"); if (f) f.click(); } }
  ];
  function decorarVaziosAtleta() {
    const c = document.getElementById("mob-content"); if (!c || !S.rig) return;
    c.querySelectorAll(".am-vazio:not([data-breu])").forEach(p => {
      const card = p.closest(".am-card"), tit = card ? ((card.querySelector(".am-tit span") || {}).textContent || "") : "";
      const r = VAZIOS_ATLETA.find(v => v.card.test(tit) && (!v.quando || v.quando()));
      if (r) decorarVazio(p, { b: r.b, fn: () => { marcarAcao(); r.fn(); }, x: "curioso" });
      else p.setAttribute("data-breu", "0");
    });
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

  /* ════ ouvintes ════ */
  /* avisos (toasts) e banners flutuantes do app */
  function observarAvisos(comBanners) {
    const vistosT = new WeakSet();
    const varrer = () => {
      document.querySelectorAll("#am-toasts .am-toast").forEach(t => { if (!vistosT.has(t)) { vistosT.add(t); toast(t); } });
      if (!comBanners || !S.dock) return;
      // banners do app no rodapé (instalar / nova versão): o Breu sobe só se o banner ficar embaixo dele
      const xDock = innerWidth - (parseFloat(getComputedStyle(S.dock).right) || 12) - (S.dock.offsetWidth || 72);
      const b = Array.from(document.querySelectorAll("body > .am-flutua")).filter(x => x.getClientRects().length && x.getBoundingClientRect().right > xDock);
      const alto = b.reduce((m, x) => Math.max(m, x.getBoundingClientRect().height), 0);
      S.dock.style.setProperty("--breu-elev", alto ? Math.round(alto + 12) + "px" : "0px");
    };
    document.querySelectorAll("#am-toasts .am-toast").forEach(t => vistosT.add(t));
    const mb = new MutationObserver(varrer);
    mb.observe(document.body, { childList: true });
    const caixa = document.getElementById("am-toasts");
    if (caixa) { caixa.dataset.breu = "1"; mb.observe(caixa, { childList: true }); }
    const mbt = new MutationObserver(() => { const cx = document.getElementById("am-toasts"); if (cx && !cx.dataset.breu) { cx.dataset.breu = "1"; mb.observe(cx, { childList: true }); } });
    mbt.observe(document.body, { childList: true });
    S.obs.push(mb, mbt);
    varrer();
  }
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
      const alvo = e.target && e.target.closest ? e.target : null; if (!alvo) return;
      // recurso bloqueado pelo plano: o Breu explica quem libera
      const g = alvo.closest("#mob-content .am-gate");
      if (g) {
        const plano = ((g.querySelector(".lock-plan-name") || {}).textContent || "").replace("+", "").trim() || "Pro";
        marcarAcao(); reagir("curioso", 2200);
        falar(V(F.bloqueado, { plano }), { usuario: true });
        return;
      }
      const t = alvo.closest("[data-res],.check-tile");
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
    ouvir(window, "offline", () => { reagir("apoio", 2600); falar(V(F.offline), { forte: true, expr: "apoio" }); depois(() => heroPadrao(), 300); });
    ouvir(window, "online", () => { reagir("vibra", 1600); depois(() => heroPadrao(), 300); });
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
    observarAvisos(true);
  }

  /* ════ montar / desmontar (atleta) ════ */
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
    S.montado = true; S.montando = false; S.visao = "atleta";
    S.base = S.quieto ? "respira" : "foco"; S.expr = S.base;
    criarDock();
    const c = document.getElementById("mob-content");
    if (c) c.classList.add("breu-folga");
    ligarOuvintes();
    cicloPiscar(); cicloOrelhas(); cicloRepouso();
    lerTela();
    atualizarDock();
    depois(carregarNovidades, 600);
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
    desmontarEquipe();
    S.extras.clear();
    Object.assign(S, { visao: null, dock: null, btn: null, fala: null, svgC: null, aba: null, modo: null, resp: null, ckFeito: null, dormindo: false, bocejou: false, exprTimer: 0, falaTimer: 0, ckUltimo: {}, ckFalado: {}, gravando: false, iaTxt: "", tecladoAberto: false, rolando: false, cobertura: 0, bloqueando: false, critico: false, forcaDentro: 0, fila: [] });
    Object.assign(N, { carregado: false, recados: [], treinoHoje: null, seq: 0, seqHoje: false });
  }

  /* ════ termos: menores de 18 precisam do responsável (o Breu explica, não apressa o aceite) ════ */
  const T = { obs: null, alvo: null };
  function conferirTermos() {
    const A = app(), form = document.getElementById("cs-form");
    const atleta = !!(A && A.user && A.cargo === "paciente" && form);
    if (!atleta) { if (T.obs) { T.obs.disconnect(); T.obs = null; T.alvo = null; } return; }
    const box = form.parentNode;
    if (T.alvo !== box) {
      if (T.obs) T.obs.disconnect();
      T.alvo = box;
      T.obs = new MutationObserver(() => decorarTermos());
      T.obs.observe(box, { childList: true, subtree: true });
    }
    decorarTermos();
  }
  function decorarTermos() {
    const A = app(), resp = document.querySelector("#cs-form .am-resp");
    if (!resp || !A || !A.user || resp.querySelector(".breu-termos")) return;
    const nasc = (document.getElementById("cs-nasc") || {}).value || A.user.nascimento;
    const id = idadeDe(nasc); if (id === null || id >= 18) return;
    const versao = id < 15 ? "sub15" : "15";
    carregarRig(versao).then(rig => {
      if (!resp.isConnected || resp.querySelector(".breu-termos")) return;
      const d = document.createElement("div"); d.className = "breu-termos"; d.setAttribute("role", "note");
      const av = document.createElement("span"); av.className = "breu-termos-av"; av.setAttribute("aria-hidden", "true");
      av.appendChild(instancia("busto", rig, "apoio"));
      const p = document.createElement("p");
      const nome = document.createElement("b"); nome.textContent = "Breu";
      p.append(nome, document.createTextNode(" " + (versao === "sub15" ? F.termos.s : F.termos.m)));
      d.append(av, p);
      resp.prepend(d);
    }).catch(() => {});
  }

  /* ════ EQUIPE: assistente com pendências do dia e dicas de cada tela ════ */
  function moduloOk(id) {
    const b = document.querySelector('.psico-sidebar .nav-item[data-mod="' + id + '"]');
    return !!b && !b.classList.contains("locked-nav");
  }
  function nomeModulo(id) {
    const b = document.querySelector('.psico-sidebar .nav-item[data-mod="' + id + '"]');
    return (b && b.textContent.trim()) || (DICAS[id] && DICAS[id].t) || id;
  }
  function abrirModulo(id, depoisDe) {
    pegar(() => APP.abrirModulo(id));
    if (depoisDe) esperar(depoisDe, 5000);
  }
  function convidarAtleta() {
    abrirModulo("atletas_pro", () => { const b = document.getElementById("atl-conv"); if (b) { b.click(); return true; } return false; });
  }
  function montarEquipe() {
    const A = app(); if (!A || !A.user || S.montando) return;
    S.montando = true;
    const uid = A.user.uid || "anon";
    carregarRig("15").then(rig => {
      S.montando = false;
      const B = app();
      if (!B || !B.user || B.user.uid !== uid || !document.getElementById("dash-main") || S.montado) return;
      Object.assign(S, { montado: true, visao: "equipe", uid, nome: primeiro(B.user.nome), versao: "15", rig, base: "foco", expr: "foco", quieto: false, modo: null });
      criarEquipe();
      ligarOuvintesEquipe();
      cicloPiscar(); cicloOrelhas();
      lerTelaEquipe();
      depois(carregarPendencias, 1800);
    }).catch(() => { S.montando = false; });
  }
  function botaoEntrada(cls) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "breu-eq-btn " + cls;
    b.setAttribute("aria-haspopup", "dialog"); b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", "breu-eq-painel");
    b.innerHTML = `<span class="breu-eq-av"><i class="breu-eq-dot" hidden></i></span><span class="breu-eq-txt"><b>Breu</b><span class="breu-eq-st"></span></span>`;
    const svg = instancia("busto"); b.querySelector(".breu-eq-av").prepend(svg); EQ.avs.push(svg);
    b.addEventListener("click", () => { if (EQ.painel && !EQ.painel.hidden) fecharPainel(); else abrirPainel(b); });
    return b;
  }
  function criarEquipe() {
    EQ.card = botaoEntrada("breu-eq-card");
    EQ.pill = botaoEntrada("breu-eq-pill");
    if (!pref().eqVisto) { EQ.card.dataset.novo = "1"; EQ.pill.dataset.novo = "1"; }
    const ovl = document.createElement("div"); ovl.className = "breu-eq-ovl"; ovl.hidden = true; ovl.addEventListener("click", () => fecharPainel());
    const p = document.createElement("aside");
    p.className = "breu-eq-painel"; p.id = "breu-eq-painel"; p.hidden = true;
    p.setAttribute("role", "dialog"); p.setAttribute("aria-labelledby", "breu-eq-tit");
    p.innerHTML = `<div class="breu-eq-cab"><span class="breu-eq-cab-av"></span><div class="breu-eq-cab-txt"><p class="breu-eq-kick">Breu · assistente da equipe</p><h2 class="breu-eq-tit" id="breu-eq-tit" tabindex="-1"></h2></div><button type="button" class="breu-eq-x" aria-label="Fechar o Breu">×</button></div><div class="breu-eq-corpo"><p class="breu-eq-intro" hidden></p><section class="breu-eq-sec"><h3 class="breu-eq-h">Hoje</h3><div class="breu-eq-pend" aria-live="polite"></div></section><section class="breu-eq-sec breu-eq-tela"><h3 class="breu-eq-h">Nesta tela · <span class="breu-eq-mod"></span></h3><ul class="breu-eq-dicas"></ul><div class="breu-eq-links"></div></section><details class="breu-eq-sec breu-eq-atl"><summary class="breu-eq-h">O Breu dos atletas</summary><div class="breu-eq-atl-c"><div class="breu-eq-duas"></div><ul class="breu-eq-dicas"></ul></div></details></div>`;
    const cab = instancia("busto"); p.querySelector(".breu-eq-cab-av").appendChild(cab); EQ.avs.push(cab);
    p.querySelector(".breu-eq-x").addEventListener("click", () => fecharPainel());
    const ul = p.querySelector(".breu-eq-atl .breu-eq-dicas");
    EQT.atletas.forEach(t => { const li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });
    p.querySelector(".breu-eq-atl").addEventListener("toggle", e => { if (e.target.open) mostrarDuasVersoes(); });
    document.body.append(ovl, p);
    EQ.ovl = ovl; EQ.painel = p;
    garantirEntradas();
    atualizarStatus();
  }
  function mostrarDuasVersoes() {
    const box = EQ.painel && EQ.painel.querySelector(".breu-eq-duas");
    if (!box || box.children.length) return;
    [["sub15", "Sub-15 · até 14 anos"], ["15", "15+ · humanoide"]].forEach(([v, rot]) => {
      const fig = document.createElement("figure"); fig.className = "breu-eq-ver";
      const cap = document.createElement("figcaption"); cap.textContent = rot;
      box.appendChild(fig);
      carregarRig(v).then(rig => { if (!fig.isConnected) return; const s = instancia("inteiro", rig, "foco"); fig.prepend(s); S.extras.add(s); fig.appendChild(cap); }).catch(() => fig.remove());
    });
  }
  /* o app redesenha o menu lateral a cada troca de tela: o Breu volta para o lugar dele */
  function garantirEntradas() {
    const side = document.querySelector(".psico-sidebar");
    if (side && EQ.card && EQ.card.parentNode !== side) side.insertBefore(EQ.card, side.querySelector(".am-ver"));
    const topo = document.querySelector("#dash-main .am-topo");
    if (topo && EQ.pill && EQ.pill.parentNode !== topo) topo.appendChild(EQ.pill);
  }
  function abrirPainel(origem) {
    if (!EQ.painel) return;
    EQ.origem = origem || EQ.card;
    // no celular o menu lateral pode estar aberto: fecha antes
    const ovlApp = document.querySelector("body > .ovl.show"); if (ovlApp) ovlApp.click();
    if (EQ.card.dataset.novo) { salvarPref({ eqVisto: true }); delete EQ.card.dataset.novo; delete EQ.pill.dataset.novo; EQ.mostrarIntro = true; }
    const intro = EQ.painel.querySelector(".breu-eq-intro");
    intro.hidden = !EQ.mostrarIntro;
    if (EQ.mostrarIntro) intro.textContent = V({ m: EQT.intro });
    EQ.painel.querySelector(".breu-eq-tit").textContent = saudacaoEquipe();
    desenharPend(); desenharTela();
    EQ.painel.hidden = false; EQ.ovl.hidden = false;
    [EQ.card, EQ.pill].forEach(b => b && b.setAttribute("aria-expanded", "true"));
    reagir("curioso", 1200);
    depois(() => { const t = EQ.painel.querySelector(".breu-eq-tit"); try { t.focus({ preventScroll: true }); } catch (e) {} }, 30);
    if (!EQ.pend || Date.now() - EQ.pend.em > 3 * 60000) carregarPendencias();
  }
  function fecharPainel(semFoco) {
    if (!EQ.painel || EQ.painel.hidden) return;
    EQ.painel.hidden = true; EQ.ovl.hidden = true; EQ.mostrarIntro = false;
    [EQ.card, EQ.pill].forEach(b => b && b.setAttribute("aria-expanded", "false"));
    if (semFoco) return;
    const volta = [EQ.origem, EQ.card, EQ.pill].find(b => b && b.isConnected && b.getClientRects().length);
    if (volta) try { volta.focus({ preventScroll: true }); } catch (e) {}
  }
  function saudacaoEquipe() {
    const h = new Date().getHours(), n = S.nome ? ", " + S.nome : "";
    return (h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite") + n + ".";
  }
  async function carregarPendencias() {
    if (EQ.carregando || !S.montado || S.visao !== "equipe") return;
    const B = fb(), uid = S.uid; if (!B) return;
    EQ.carregando = true;
    if (!EQ.pend) desenharPend();
    const ini = new Date(); ini.setHours(0, 0, 0, 0);
    const hoje = diaLocal(), ok = p => Promise.resolve(p).catch(() => null);
    const verCk = moduloOk("dashboard") || moduloOk("checkins"), verAg = moduloOk("agenda"), admin = !!pegar(() => ehAdmin());
    const [cks, ag, lg] = await Promise.all([
      verCk ? ok(B.query("checkins", "data", ">=", ini.toISOString(), "data", "DESCENDING", 500, true)) : null,
      verAg ? ok(B.query("agenda", "dataHora", ">=", hoje, "dataHora", "ASCENDING", 300, true)) : null,
      admin ? ok(B.query("solicitacoes_lgpd", "status", "in", ["aberta", "em_andamento"], null, "DESCENDING", 200, true)) : null
    ]);
    EQ.carregando = false;
    if (!S.montado || S.uid !== uid) return;
    const itens = [];
    if (cks) {
      const pessoas = new Set(cks.filter(r => { const al = pegar(() => alertasCk(r)); return al && al.length; }).map(r => r.pacienteId));
      if (pessoas.size) {
        const mod = moduloOk("dashboard") ? "dashboard" : "checkins";
        itens.push({ tipo: "alerta", urg: true, n: pessoas.size, txt: `${plural(pessoas.size, "atleta", "atletas")} com sinal de alerta no check-in de hoje.`, mod, botao: mod === "dashboard" ? "Ver no Radar" : "Ver check-ins" });
      }
    }
    if (ag) {
      const agora = new Date(Date.now() - 30 * 60000), lim = `${diaLocal(agora)}T${p2(agora.getHours())}:${p2(agora.getMinutes())}`;
      const minhas = ag.filter(s => String(s.dataHora).slice(0, 10) === hoje && s.profissionalId === uid && String(s.dataHora) >= lim)
        .sort((a, b) => String(a.dataHora).localeCompare(String(b.dataHora)));
      if (minhas.length) {
        const pr = minhas[0], quem = primeiro(pr.nome);
        const txt = minhas.length === 1 ? `1 sessão sua hoje, às ${hhmm(pr.dataHora)}${quem ? " (" + quem + ")" : ""}.` : `${minhas.length} sessões suas hoje · a próxima às ${hhmm(pr.dataHora)}${quem ? " (" + quem + ")" : ""}.`;
        itens.push({ tipo: "sessao", n: minhas.length, txt, mod: "agenda", botao: "Abrir agenda" });
      }
    }
    if (lg && lg.length) {
      const venc = lg.filter(s => Date.now() - Date.parse(s.criadoEm) >= 15 * 864e5).length;
      itens.push({ tipo: "lgpd", urg: venc > 0, n: lg.length, venc, txt: `${plural(lg.length, "pedido LGPD em aberto", "pedidos LGPD em aberto")}${venc ? ` · ${venc === 1 ? "1 passou" : venc + " passaram"} de 15 dias` : ""}.`, mod: "lgpd", botao: "Abrir pedidos" });
    }
    EQ.pend = { em: Date.now(), itens };
    desenharPend();
  }
  function desenharPend() {
    const box = EQ.painel && EQ.painel.querySelector(".breu-eq-pend");
    if (box) {
      box.textContent = "";
      const P = EQ.pend;
      if (!P || (!P.itens.length && EQ.carregando)) { const p = document.createElement("p"); p.className = "breu-eq-vazio"; p.textContent = EQT.carregando; box.appendChild(p); }
      else if (!P.itens.length) { const p = document.createElement("p"); p.className = "breu-eq-vazio"; p.textContent = EQT.nada; box.appendChild(p); }
      else P.itens.forEach(it => {
        const d = document.createElement("div"); d.className = "breu-eq-item" + (it.urg ? " urg" : "") + " t-" + it.tipo;
        const p = document.createElement("p"); p.textContent = it.txt; d.appendChild(p);
        if (it.mod && moduloOk(it.mod)) {
          const b = document.createElement("button"); b.type = "button"; b.className = "breu-eq-ir"; b.textContent = it.botao;
          b.addEventListener("click", () => { fecharPainel(true); abrirModulo(it.mod); });
          d.appendChild(b);
        }
        box.appendChild(d);
      });
    }
    atualizarStatus();
  }
  /* texto curto e ponto colorido no botão do Breu */
  function atualizarStatus() {
    const P = EQ.pend, it = P ? P.itens : [];
    const al = it.find(x => x.tipo === "alerta"), lg = it.find(x => x.tipo === "lgpd"), se = it.find(x => x.tipo === "sessao");
    let txt = "Dicas desta tela", cor = "";
    if (!P) txt = "Conferindo o dia...";
    if (al) { txt = plural(al.n, "alerta hoje", "alertas hoje"); cor = "urg"; }
    else if (lg && lg.venc) { txt = "LGPD: prazo vencido"; cor = "urg"; }
    else if (se) { txt = plural(se.n, "sessão hoje", "sessões hoje"); cor = "info"; }
    else if (lg) { txt = plural(lg.n, "pedido LGPD", "pedidos LGPD"); cor = "atencao"; }
    else if (P) txt = "Tudo em dia";
    [EQ.card, EQ.pill].forEach(b => {
      if (!b) return;
      const novo = !!b.dataset.novo;
      b.querySelector(".breu-eq-st").textContent = novo ? "Oi! Clique aqui" : txt;
      const dot = b.querySelector(".breu-eq-dot");
      dot.hidden = !cor || novo; if (cor) dot.dataset.cor = cor;
      b.toggleAttribute("data-urg", cor === "urg" && !novo);
      b.setAttribute("aria-label", "Breu, assistente da equipe: " + (novo ? "pendências do dia e dicas de cada tela" : txt));
    });
  }
  function desenharTela() {
    if (!EQ.painel) return;
    const aba = pegar(() => APP.abaStaff) || "dashboard", sec = EQ.painel.querySelector(".breu-eq-tela");
    const d = DICAS[aba] || { t: nomeModulo(aba), d: [EQT.padrao], l: [] };
    EQ.abaHelp = aba;
    sec.querySelector(".breu-eq-mod").textContent = d.t;
    const ul = sec.querySelector(".breu-eq-dicas"); ul.textContent = "";
    d.d.forEach(t => { const li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });
    const links = sec.querySelector(".breu-eq-links"); links.textContent = "";
    (d.l || []).filter(id => id !== aba && moduloOk(id)).forEach(id => {
      const b = document.createElement("button"); b.type = "button"; b.className = "breu-eq-link"; b.textContent = nomeModulo(id);
      b.addEventListener("click", () => { abrirModulo(id); });
      links.appendChild(b);
    });
    links.hidden = !links.children.length;
  }
  /* nenhum atleta ainda: o Breu leva direto para o convite */
  function decorarVaziosEquipe() {
    const main = document.getElementById("dash-main"); if (!main || !S.rig) return;
    const podeConvidar = moduloOk("atletas_pro");
    main.querySelectorAll(".am-vazio:not([data-breu])").forEach(p => {
      if (podeConvidar && /Nenhum atleta (cadastrado|ainda)/.test(p.textContent || "")) decorarVazio(p, { b: "Convidar atleta", fn: convidarAtleta, x: "curioso" });
      else p.setAttribute("data-breu", "0");
    });
    main.querySelectorAll(".am-selbar .am-dica:not([data-breu])").forEach(s => {
      if (podeConvidar && /Nenhum atleta cadastrado/.test(s.textContent || "")) {
        s.setAttribute("data-breu", "1");
        const b = document.createElement("button"); b.type = "button"; b.className = "breu-eq-link"; b.textContent = "Convidar atleta";
        b.addEventListener("click", convidarAtleta);
        s.after(b);
      } else s.setAttribute("data-breu", "0");
    });
  }
  function lerTelaEquipe() {
    if (!S.montado || S.visao !== "equipe") return;
    garantirEntradas();
    const aberto = EQ.painel && !EQ.painel.hidden;
    if (aberto && document.querySelector("#am-sos-faixa .glow-r")) fecharPainel(true); // S.O.S chegou: o painel sai da frente
    else if (aberto && pegar(() => APP.abaStaff) !== EQ.abaHelp) desenharTela();
    decorarVaziosEquipe();
  }
  function ligarOuvintesEquipe() {
    ouvir(window, "pointermove", e => { S.ptr = { x: e.clientX, y: e.clientY }; S.ptrT = Date.now(); agendarOlhar(); }, { passive: true });
    ouvir(window, "pointerdown", e => { S.ptr = { x: e.clientX, y: e.clientY }; S.ptrT = Date.now(); agendarOlhar(); depois(agendarOlhar, 9100); }, { passive: true, capture: true });
    ouvir(document, "keydown", e => { if (e.key === "Escape" && EQ.painel && !EQ.painel.hidden && !document.querySelector(".pro-modal-overlay.active")) { e.stopPropagation(); fecharPainel(); } }, true);
    let pend = false;
    const mo = new MutationObserver(() => {
      garantirEntradas(); // sem esperar o próximo quadro: o menu lateral não pisca
      if (pend) return; pend = true;
      requestAnimationFrame(() => { pend = false; lerTelaEquipe(); });
    });
    mo.observe(document.getElementById("app"), { childList: true, subtree: true });
    S.obs.push(mo);
    observarAvisos(false);
  }
  function desmontarEquipe() {
    [EQ.card, EQ.pill, EQ.painel, EQ.ovl].forEach(n => n && n.remove());
    Object.assign(EQ, { card: null, pill: null, painel: null, ovl: null, avs: [], pend: null, carregando: false, abaHelp: null, origem: null, mostrarIntro: false });
  }

  /* ════ início: o app troca a tela inteira ao entrar e sair ════ */
  function visaoAtual() {
    const A = app();
    if (!A || !A.user) return null;
    if (A.cargo === "paciente" && document.querySelector(".phone-header") && document.getElementById("mob-content")) return "atleta";
    if (pegar(() => isStaff(A.cargo)) && document.getElementById("dash-main")) return "equipe";
    return null;
  }
  function conferir() {
    const A = app(), v = visaoAtual();
    if (S.montado && (v !== S.visao || !A || !A.user || A.user.uid !== S.uid)) desmontar();
    if (v && !S.montado) { if (v === "atleta") montar(); else montarEquipe(); }
    else if (v === "atleta" && S.montado) {
      const c = document.getElementById("mob-content");
      if (c && !c.classList.contains("breu-folga")) c.classList.add("breu-folga");
      if (S.dock && !S.dock.isConnected) document.body.appendChild(S.dock);
    } else if (v === "equipe" && S.montado) lerTelaEquipe();
    conferirTermos();
  }
  function iniciar() {
    const raiz = document.getElementById("app");
    if (!raiz) return;
    let pend = false;
    new MutationObserver(() => { if (pend) return; pend = true; requestAnimationFrame(() => { pend = false; conferir(); }); }).observe(raiz, { childList: true });
    conferir();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
  window.Breu = {
    versao: VERSAO,
    reagir: (x, ms) => S.montado && reagir(x, ms),
    falar: t => S.montado && falar(String(t), { usuario: true }),
    estado: () => ({ montado: S.montado, visao: S.visao, versao: S.versao, expr: S.expr, aba: S.aba, modo: S.modo, quieto: S.quieto, idade: S.idade, seq: N.seq, seqHoje: N.seqHoje, recados: N.recados.map(r => r.tipo), treinoHoje: N.treinoHoje && N.treinoHoje.titulo, pendencias: EQ.pend && EQ.pend.itens.map(i => i.tipo + ":" + i.n) })
  };
})();
