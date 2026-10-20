# AceMind — High Performance Lab

Acompanhamento esportivo, físico e mental de atletas, com equipe multidisciplinar: treinador, fisioterapia, medicina e psicologia.

**App:** https://brunolimamarques.github.io/Ace-Mind/

---

## Como publicar uma versão nova

### 1. Site: GitHub Pages
Tudo o que está na raiz da branch `main` vai ao ar sozinho, em cerca de 1 minuto. Os celulares trocam para a versão nova automaticamente quando o app é aberto.

### 2. Servidor: Firebase
Faça isso uma vez por versão, logo depois do passo 1. Funciona direto no navegador, sem instalar nada:

[![Abrir no Cloud Shell](https://gstatic.com/cloudssh/images/open-btn.svg)](https://shell.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fbrunolimamarques%2FAce-Mind&cloudshell_git_branch=main&cloudshell_tutorial=firebase%2Ftutorial.md)

1. Clique no botão e entre com a conta Google **dona do projeto Firebase**. Confirme que confia no repositório.
2. No terminal que abrir, rode:
   ```
   bash firebase/instalar.sh
   ```
3. Responda às três perguntas: backup, chave do Gemini e WhatsApp do S.O.S. O tutorial ao lado explica cada uma.

O instalador:
- publica os índices e as regras de segurança do banco;
- cria as chaves das notificações (a privada fica só no Secret Manager);
- guarda a chave da IA;
- publica as funções de servidor: S.O.S, notificações, lembretes, segurança, LGPD e IA.

Pode rodar de novo quando quiser: o que já está pronto é mantido. A função antiga `analyzeAthleteVideo` não é apagada.

### 3. No app, com uma conta de administração
1. **Saúde do Sistema**: confira se aparece “Funções de servidor respondendo” e clique em **Migrar dados**. Isso é feito uma vez só.
2. **Usuários & Planos**: confira o cargo de cada profissional, porque cada profissão vê só a sua área do prontuário:

   | Cargo | O que vê |
   |---|---|
   | Treinador | Geral e treino |
   | Fisioterapeuta / Médico | Geral, treino, fisioterapia e medicina |
   | Psicólogo / Assistente | Geral e psicologia |
   | Administração | Geral, treino e telas de administração |

   Se você administra e também atende psicologia, use *Psicólogo / Mentor* com **“Também faz parte da administração”** marcado.
3. **Segurança & Privacidade**: preencha empresa, encarregado de dados (DPO) e e-mail de privacidade. Escolha também o tempo de inatividade e se atletas podem criar conta sozinhos.
4. Cada pessoa ativa as notificações no próprio celular. No iPhone, o app precisa estar instalado na tela de início (iOS 16.4 ou mais recente).

---

## O que tem neste repositório

| Caminho | O que é |
|---|---|
| `index.html`, `app.js`, `app.css`, `sw.js`, `manifest.json`, `fonts/`, `vendor/`, ícones | O app (publicado pelo GitHub Pages) |
| `firebase/firestore.rules`, `firebase/firestore.indexes.json`, `firebase/storage.rules` | Regras de segurança e índices do banco |
| `firebase/functions/` | Funções de servidor (Node.js 22) |
| `firebase/instalar.sh`, `firebase/tutorial.md` | Instalador do servidor e o passo a passo do Cloud Shell |
| `firebase.json`, `.firebaserc` | Configuração do Firebase (projeto `ace-mind-c13a1`) |
| `frontend/`, `backend/` | Protótipo antigo: não é usado pelo app |

---

## Segurança

- **Este repositório é público.** Nunca coloque chaves, senhas ou dados de atletas aqui. O instalador guarda as chaves no Secret Manager do Google, sem passar pelo GitHub.
- A configuração do Firebase que aparece no `app.js` é pública por natureza. O que protege os dados são as regras do banco (`firebase/firestore.rules`) e o login.
- O GitHub Pages não permite cabeçalhos de segurança personalizados. Por isso, a política de conteúdo (CSP) vai dentro do `index.html` e o app se recusa a abrir dentro de outros sites. O `firebase.json` já traz os cabeçalhos completos, caso um dia o site mude para o Firebase Hosting. Isso muda o endereço do app, e os atletas precisariam reinstalar.

**Ajustes recomendados no console**, que só o dono do projeto pode fazer:
1. **Restringir a chave do app.** No Google Cloud Console, vá em APIs e serviços → Credenciais → *Browser key*:
   - Em *Referenciadores HTTP*, deixe `https://brunolimamarques.github.io/*`.
   - Em *APIs*, deixe Identity Toolkit API, Token Service API e Cloud Firestore API.

   Depois de salvar, teste o login.
2. **Política de senha no servidor**, se a opção aparecer no seu projeto. Em Authentication → Configurações → Política de senha, ponha mínimo de 8 caracteres e exija número.
3. **Proteção contra enumeração de e-mail** ativada (também em Authentication → Configurações).
4. **Verificação em duas etapas** nas contas Google e no GitHub com acesso ao projeto.
5. **Alerta de orçamento** no faturamento do Google Cloud (por exemplo, R$ 100 por mês).

## LGPD

- A Política de Privacidade e os Termos de Uso do app são **modelos**. Peça para um advogado validar: são dados de saúde, inclusive de menores de idade.
- Os pedidos dos titulares aparecem em **Pedidos LGPD**, com o prazo de 15 dias destacado.
- A exclusão de conta apaga os dados não clínicos e a conta de acesso. Os registros clínicos ficam guardados e bloqueados pelo prazo legal.
- Use uma chave do Gemini com faturamento ativo. No nível gratuito, o Google pode usar os dados enviados.

## Se algo der errado

- **Site:** no GitHub, abra o pull request da versão e clique em **Revert**. Em 1 minuto o site volta.
- **Regras do banco:** no console do Firebase, vá em Firestore → Regras → histórico e publique a versão anterior.
- **Funções:** sem elas, o app continua funcionando. Ficam indisponíveis o push, o aviso de S.O.S, os lembretes, a exclusão de conta e a IA. O S.O.S sempre mostra os telefones do CVV (188) e do SAMU (192).

## Como a v3 foi verificada

- 167 verificações automáticas no navegador, com a política de segurança real: regras de acesso de cada profissão, ataques de texto malicioso em todas as telas, sessão, modo offline, PDF e milhares de registros antigos.
- 13 verificações das funções de servidor.
- 13 verificações no formato do GitHub Pages, incluindo a troca automática da versão 2.1 para a 3.0 em quem já tem o app instalado.
- 24 cenários do instalador.
- Regras conferidas com o verificador oficial de sintaxe do Firebase.
