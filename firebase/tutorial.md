# Instalar o servidor do AceMind v3

## Antes de começar

<walkthrough-tutorial-duration duration="10"></walkthrough-tutorial-duration>

Este passo a passo publica no Firebase (projeto **ace-mind-c13a1**) a parte de servidor do AceMind v3:

- as regras de segurança e os índices do banco;
- as chaves das notificações e da IA, guardadas no Secret Manager e nunca mostradas na tela;
- as funções de servidor: S.O.S, notificações, lembretes, segurança, LGPD e IA.

Confira antes:

1. A v3 do site já está no ar. Isso acontece quando o pull request é aceito no GitHub.
2. Você entrou no Cloud Shell com a conta Google dona do projeto Firebase.

Clique em **Iniciar**.

## Rodar o instalador

Copie o comando abaixo para o terminal (ícone de copiar ao lado) e tecle **Enter**:

```bash
bash firebase/instalar.sh
```

O instalador vai perguntar três coisas. Responda e tecle **Enter**:

1. **Backup diário do banco**: recomendado. Basta teclar **Enter** para aceitar.
2. **Chave do Gemini**: se a chave da função de vídeo atual for encontrada, ele oferece usar a mesma. Se não, cole a chave (ela não aparece enquanto você cola) ou tecle **Enter** para deixar a IA para depois.
3. **WhatsApp do S.O.S** (opcional): cole o endereço https do seu cenário no Make, Zapier, n8n ou Z-API, ou tecle **Enter** para pular.

A primeira vez leva uns 10 minutos, quase todos esperando o Google publicar as funções.

Se alguma coisa der errado, copie as mensagens do terminal e mande para o Claude. Pode rodar o instalador de novo sem problema: o que já estiver pronto é mantido.

## Depois, no app

Abra o app e entre com uma conta de administração:

1. **Saúde do Sistema**: confira se aparece “Funções de servidor respondendo” e clique em **Migrar dados**. Isso é feito uma vez só.
2. **Usuários & Planos**: confira o cargo de cada profissional, porque cada profissão vê só a sua área. Se você administra e também atende psicologia, use o cargo *Psicólogo / Mentor* com a opção *Também faz parte da administração*.
3. **Segurança & Privacidade**: preencha empresa, encarregado de dados (DPO) e e-mail de privacidade.
4. Peça para cada pessoa ativar as notificações no próprio celular. No iPhone, o app precisa estar instalado na tela de início.

## Pronto

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

O AceMind v3 está completo: o site no GitHub Pages e o servidor no Firebase.
