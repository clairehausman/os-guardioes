# Os Guardiões — implantação no Railway

## Deploy
1. Suba todos os arquivos desta pasta para um repositório GitHub.
2. No Railway, crie um projeto e selecione Deploy from GitHub Repo.
3. No serviço, configure um Volume montado em `/data`.
4. Configure a variável `DATA_DIR=/data`.
5. Gere um domínio público em Settings → Networking → Generate Domain.
6. O serviço inicia com `npm start`; a interface e a API ficam no mesmo domínio.

A API usa o prefixo `/api` e o banco persistente em `/data/db.json`. Na primeira inicialização, o banco de demonstração é copiado para o volume se ainda não existir.

## Atenção
JSON Server é uma API de protótipo e não oferece autenticação/autorização robusta por padrão. Use apenas para a demonstração acadêmica com pessoas conhecidas; não coloque dados pessoais reais ou sensíveis. Faça backup do arquivo `/data/db.json` antes de mudanças importantes.
