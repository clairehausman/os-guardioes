# Os Guardiões — implantação no Railway

## Deploy
1. Envie o conteúdo desta pasta para a raiz do repositório GitHub conectado ao Railway.
2. O Railway deve executar `npm start` automaticamente.
3. Em Settings → Networking, gere o domínio público.
4. Em Volumes, crie um volume montado em `/data`.
5. Em Variables, configure `DATA_DIR=/data` e faça redeploy.

A aplicação serve o frontend e a API no mesmo domínio. A API fica em `/api`.

## Observações
- Para um protótipo acadêmico. Não use dados pessoais reais: a autenticação atual é demonstrativa e não implementa controles de segurança de produção.
- Configure o Volume antes de cadastrar dados que deseja preservar. A base inicial é copiada para o volume somente quando `/data/db.json` ainda não existe.
- Se houver dados válidos já cadastrados no serviço antigo, faça backup antes de trocar a versão.
