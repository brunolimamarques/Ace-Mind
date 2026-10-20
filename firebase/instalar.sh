#!/usr/bin/env bash
# AceMind v3 — publica a parte de servidor no Firebase (projeto ace-mind-c13a1):
# índices e regras do banco, chaves das notificações, chave da IA e funções de servidor.
#
# Feito para o Google Cloud Shell (no navegador): não precisa instalar nada no computador.
# Uso, na pasta do repositório:   bash firebase/instalar.sh
# Pode rodar de novo quantas vezes quiser: o que já está pronto é mantido.
# Nenhuma chave aparece na tela nem fica gravada em arquivo: tudo vai direto para o Secret Manager.
set -Eeuo pipefail

PROJETO="${ACEMIND_PROJETO:-ace-mind-c13a1}"
REGIAO="us-central1"
SITE="${ACEMIND_SITE:-https://brunolimamarques.github.io/Ace-Mind/}"
FUNCOES=(onSosCriado onSosAtualizado onCheckinCriado onLesaoCriada lembretes status testarPush encerrarSessoes desativarUsuario excluirConta analisarVideo feedbackIA insightsIA)
RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$RAIZ"

az=$'\e[1;36m'; vd=$'\e[1;32m'; am=$'\e[1;33m'; vm=$'\e[1;31m'; nn=$'\e[0m'
passo()  { printf '\n%s▶ %s%s\n' "$az" "$*" "$nn"; }
ok()     { printf '%s✓%s %s\n' "$vd" "$nn" "$*"; }
aviso()  { printf '%s!%s %s\n' "$am" "$nn" "$*"; }
falhou() { printf '%s✗ %s%s\n' "$vm" "$*" "$nn" >&2; }
# respostas vêm do terminal (Cloud Shell); ACEMIND_ENTRADA permite testar o script com um arquivo de respostas
if [[ -n "${ACEMIND_ENTRADA:-}" ]]; then exec 3<"$ACEMIND_ENTRADA"; elif { exec 3</dev/tty; } 2>/dev/null; then :; else exec 3<&0; fi
ler()    { local _resp=""; IFS= read -r -u 3 ${3:-} -p "$1" _resp || _resp=""; printf -v "$2" '%s' "$_resp"; }   # ler "pergunta" VARIAVEL [-s]
sim()    { local r=""; ler "$1 [S/n] " r; [[ -z "$r" || "$r" =~ ^[sSyY] ]]; }      # Enter = sim
nao()    { local r=""; ler "$1 [s/N] " r; [[ ! "$r" =~ ^[sSyY] ]]; }               # Enter = não
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
trap 'falhou "Parou na linha $LINENO. Copie as mensagens acima e mande para o Claude. Dá para rodar o script de novo sem problema."' ERR

FB() { firebase "$@" --project "$PROJETO"; }
segredo_existe() { gcloud secrets describe "$1" --project "$PROJETO" >/dev/null 2>&1; }
guardar_segredo() { FB functions:secrets:set "$1" --data-file=- --force >/dev/null; }   # valor chega pela entrada padrão

printf '%sAceMind v3 · instalação do servidor (Firebase)%s\n' "$az" "$nn"
printf 'Projeto: %s · Site: %s\n' "$PROJETO" "$SITE"

# ───────── 1. site, conta e projeto ─────────
passo "1/8 Conferindo o site, a conta e o projeto"
APPJS="$(curl -fsSL --max-time 20 "${SITE}app.js" 2>/dev/null || true)"
if [[ "$APPJS" == *'AM_VERSAO="3'* ]]; then
  ok "O site já está na versão 3."
else
  aviso "O site ainda não está na versão 3. Publique a v3 no GitHub primeiro (aceite o pull request):"
  aviso "as regras novas do banco foram feitas para o app novo, e o app antigo deixa de funcionar em parte."
  nao "Continuar mesmo assim?" && exit 0
fi
unset APPJS
CONTA="$(gcloud config get-value account 2>/dev/null || true)"
if [[ -z "$CONTA" ]]; then falhou "Nenhuma conta Google ativa. Rode: gcloud auth login"; exit 1; fi
if ! gcloud projects describe "$PROJETO" --format='value(projectId)' >/dev/null 2>&1; then
  falhou "A conta $CONTA não tem acesso ao projeto $PROJETO. Entre com a conta dona do Firebase: gcloud auth login"
  exit 1
fi
gcloud config set project "$PROJETO" --quiet >/dev/null 2>&1
ok "Conta $CONTA · projeto $PROJETO"

# ───────── 2. ferramentas ─────────
passo "2/8 Preparando as ferramentas (Node.js 22 e Firebase CLI)"
NODE_MAJ="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
if (( NODE_MAJ < 22 )); then
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [[ ! -s "$NVM_DIR/nvm.sh" ]]; then falhou "Precisa do Node.js 22 (no Cloud Shell ele vem pelo nvm)."; exit 1; fi
  set +u; . "$NVM_DIR/nvm.sh"; nvm install 22 >/dev/null; nvm use 22 >/dev/null; set -u
fi
FBV="$(firebase --version 2>/dev/null || echo 0)"
if (( ${FBV%%.*} < 15 )); then
  npm install -g firebase-tools@15 --no-audit --no-fund --loglevel=error >/dev/null
fi
if ! FB projects:list --json >/dev/null 2>&1; then
  aviso "Falta entrar no Firebase: abra o link que vai aparecer, autorize com a conta dona do projeto e cole o código aqui."
  firebase login --no-localhost
fi
ok "Node $(node -v) · Firebase CLI $(firebase --version)"

# ───────── 3. serviços do Google Cloud ─────────
passo "3/8 Ativando os serviços usados pelas funções (pode levar 1 minuto)"
gcloud services enable firestore.googleapis.com firebaserules.googleapis.com cloudfunctions.googleapis.com \
  cloudbuild.googleapis.com artifactregistry.googleapis.com run.googleapis.com eventarc.googleapis.com \
  pubsub.googleapis.com cloudscheduler.googleapis.com secretmanager.googleapis.com --project "$PROJETO" --quiet
ok "Serviços ativos."

# ───────── 4. backup ─────────
passo "4/8 Backup diário do banco"
if [[ -n "$(gcloud firestore backups schedules list --database='(default)' --project "$PROJETO" --format='value(name)' 2>/dev/null || true)" ]]; then
  ok "O backup diário já estava ativo."
elif sim "Ativar o backup diário do banco, guardado por 14 dias? (custo baixo de armazenamento; recomendado para dados de saúde)"; then
  if gcloud firestore backups schedules create --database='(default)' --recurrence=daily --retention=14d --project "$PROJETO" --quiet >/dev/null 2>&1; then
    ok "Backup diário ativado."
  else
    aviso "Não deu para ativar o backup agora. Dá para ligar depois no console: Firestore → Disaster recovery."
  fi
else
  aviso "Backup não ativado."
fi

# ───────── 5. banco: índices e regras ─────────
passo "5/8 Índices e regras de segurança do banco"
FB deploy --only firestore:indexes --non-interactive
FB deploy --only firestore:rules --non-interactive
if gcloud storage buckets describe "gs://$PROJETO.firebasestorage.app" >/dev/null 2>&1 || gcloud storage buckets describe "gs://$PROJETO.appspot.com" >/dev/null 2>&1; then
  if FB deploy --only storage --non-interactive; then ok "Storage fechado (o app não guarda arquivos lá)."; else aviso "Não deu para publicar as regras do Storage agora (o app não usa o Storage)."; fi
fi
ok "Regras publicadas. Os índices ficam prontos em alguns minutos."

# ───────── 6. chaves ─────────
passo "6/8 Chaves das notificações e da IA"
TOKEN="$(gcloud auth print-access-token)"
DOC="https://firestore.googleapis.com/v1/projects/$PROJETO/databases/(default)/documents/config/publico"
PUB_ATUAL="$(curl -fsS -H "Authorization: Bearer $TOKEN" "$DOC" 2>/dev/null | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const f=JSON.parse(s).fields||{};process.stdout.write((f.vapidPublica&&f.vapidPublica.stringValue)||"")}catch(e){}})' || true)"
if segredo_existe VAPID_PRIVADA && [[ -n "$PUB_ATUAL" ]]; then
  ok "Chaves das notificações já configuradas."
else
  # par de chaves VAPID (P-256): a privada vai direto para o Secret Manager; a pública vai para o app
  node -e '
    const c=require("crypto"),fs=require("fs");
    const {privateKey}=c.generateKeyPairSync("ec",{namedCurve:"prime256v1"});
    const j=privateKey.export({format:"jwk"}),b=s=>Buffer.from(s,"base64url");
    fs.writeFileSync(process.argv[1],Buffer.concat([Buffer.from([4]),b(j.x),b(j.y)]).toString("base64url"));
    process.stdout.write(j.d);' "$TMP/vapid_pub" | guardar_segredo VAPID_PRIVADA
  PUB="$(cat "$TMP/vapid_pub")"
  AGORA="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  curl -fsS -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    "$DOC?updateMask.fieldPaths=vapidPublica&updateMask.fieldPaths=vapidAtualizadaEm" \
    -d "{\"fields\":{\"vapidPublica\":{\"stringValue\":\"$PUB\"},\"vapidAtualizadaEm\":{\"stringValue\":\"$AGORA\"}}}" >/dev/null
  ok "Chaves das notificações criadas: a privada ficou só no servidor e a pública já está no app."
fi
unset TOKEN

GEMINI_OK=0
if segredo_existe GEMINI_API_KEY && ! gcloud secrets versions access latest --secret=GEMINI_API_KEY --project "$PROJETO" 2>/dev/null | grep -qx 'nao-configurada'; then
  ok "Chave da IA (Gemini) já configurada."; GEMINI_OK=1
fi
if (( ! GEMINI_OK )); then
  for S in $(gcloud secrets list --project "$PROJETO" --format='value(name.basename())' 2>/dev/null | grep -i gemini | grep -vx 'GEMINI_API_KEY' || true); do
    if sim "Achei o segredo \"$S\" no projeto. Usar essa mesma chave do Gemini?"; then
      gcloud secrets versions access latest --secret="$S" --project "$PROJETO" | guardar_segredo GEMINI_API_KEY
      ok "Chave da IA copiada de \"$S\"."; GEMINI_OK=1; break
    fi
  done
fi
if (( ! GEMINI_OK )); then
  # a função antiga de vídeo pode ter a chave numa variável de ambiente
  for G in "" "--gen2"; do
    gcloud functions describe analyzeAthleteVideo $G --region "$REGIAO" --project "$PROJETO" --format=json >"$TMP/antiga.json" 2>/dev/null && break || : >"$TMP/antiga.json"
  done
  VAR="$(node -e '
    try{const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));
      const e={...(j.environmentVariables||{}),...((j.serviceConfig||{}).environmentVariables||{})};
      const k=Object.keys(e).find(n=>/GEMINI|GENAI|GOOGLE_?AI|API_?KEY/i.test(n)&&String(e[n]).length>20);
      process.stdout.write(k||"")}catch(x){}' "$TMP/antiga.json")"
  if [[ -n "$VAR" ]] && sim "A função antiga de vídeo usa a chave \"$VAR\". Usar a mesma chave nas funções novas?"; then
    node -e 'const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));const e={...(j.environmentVariables||{}),...((j.serviceConfig||{}).environmentVariables||{})};process.stdout.write(String(e[process.argv[2]]))' "$TMP/antiga.json" "$VAR" | guardar_segredo GEMINI_API_KEY
    ok "Chave da IA copiada da função antiga."; GEMINI_OK=1
  fi
  rm -f "$TMP/antiga.json"
fi
if (( ! GEMINI_OK )); then
  printf 'Cole a chave do Gemini (aistudio.google.com → Get API key) e tecle Enter.\n'
  printf 'Use uma chave com faturamento ativo: no nível gratuito o Google pode usar os dados enviados.\n'
  printf 'Para deixar a IA desligada por enquanto, só tecle Enter: '
  CHAVE=""; ler "" CHAVE -s; echo
  if [[ -n "$CHAVE" ]]; then
    printf '%s' "$CHAVE" | guardar_segredo GEMINI_API_KEY; ok "Chave da IA guardada no servidor."
  else
    printf 'nao-configurada' | guardar_segredo GEMINI_API_KEY
    aviso "IA desligada por enquanto. Para ligar, rode este script de novo e cole a chave."
  fi
  unset CHAVE
fi

# ───────── 7. aviso de S.O.S por WhatsApp (opcional) ─────────
passo "7/8 Aviso de S.O.S por WhatsApp (opcional)"
ENVF="firebase/functions/.env"
[[ -f "$ENVF" ]] || cp firebase/functions/.env.exemplo "$ENVF"
URL="$(sed -n 's/^WEBHOOK_SOS_URL="\{0,1\}\([^"]*\)"\{0,1\}$/\1/p' "$ENVF" | head -1)"
if [[ -z "$URL" ]]; then   # valor já publicado antes (para não perder ao rodar de novo num clone novo)
  URL="$(gcloud run services describe onsoscriado --region "$REGIAO" --project "$PROJETO" --format=json 2>/dev/null \
    | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const c=JSON.parse(s).spec.template.spec.containers[0];const v=(c.env||[]).find(e=>e.name==="WEBHOOK_SOS_URL");process.stdout.write((v&&v.value)||"")}catch(e){}})' || true)"
fi
if [[ -n "$URL" ]]; then
  ok "Webhook do S.O.S configurado."
else
  printf 'Endereço https de um cenário no Make, Zapier, n8n ou Z-API que envia o WhatsApp.\n'
  ler "Cole o endereço, ou tecle Enter para pular: " URL
  if [[ -n "$URL" && ! "$URL" =~ ^https://[^[:space:]\"]+$ ]]; then aviso "Endereço ignorado: precisa começar com https://"; URL=""; fi
  if [[ -n "$URL" ]]; then ok "Webhook do S.O.S configurado."; else aviso "Sem WhatsApp por enquanto: o S.O.S chega como notificação no celular da equipe."; fi
fi
grep -v '^WEBHOOK_SOS_URL=' "$ENVF" >"$TMP/env" || true
printf 'WEBHOOK_SOS_URL="%s"\n' "$URL" >>"$TMP/env"
cp "$TMP/env" "$ENVF"

# ───────── 8. funções ─────────
passo "8/8 Funções de servidor: S.O.S, notificações, lembretes, segurança e IA (uns 5 minutos)"
(cd firebase/functions && npm ci --no-audit --no-fund --loglevel=error)
FB functions:artifacts:setpolicy --location "$REGIAO" --days 1 --force >/dev/null 2>&1 || true
if ! FB deploy --only functions:acemind --force; then
  aviso "Na primeira vez o Google pode demorar para liberar as permissões das funções. Tentando de novo em 90 segundos..."
  sleep 90
  FB deploy --only functions:acemind --force
fi
FB functions:list --json >"$TMP/lista.json" 2>/dev/null || true
N="$(node -e 'try{const r=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).result||[];const ids=new Set(r.map(e=>e.id));process.stdout.write(String(process.argv.slice(2).filter(f=>ids.has(f)).length))}catch(e){process.stdout.write("?")}' "$TMP/lista.json" "${FUNCOES[@]}")"
ok "Funções publicadas: $N de ${#FUNCOES[@]}."

printf '\n%sPronto! A parte de servidor está no ar.%s\n' "$vd" "$nn"
cat <<FIM
Agora, no app ($SITE), entre com uma conta de administração:
  1. Saúde do Sistema → confira "Funções de servidor respondendo" e clique em "Migrar dados" (uma vez só).
  2. Usuários & Planos → confira o cargo de cada profissional (cada profissão vê só a sua área).
  3. Segurança & Privacidade → preencha empresa, encarregado de dados (DPO) e e-mail de privacidade.
  4. Peça para cada pessoa ativar as notificações no próprio celular.
FIM
