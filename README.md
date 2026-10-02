# Os Guardiões — aplicação web

Protótipo front-end completo em HTML, CSS e JavaScript, com API REST local via JSON Server.

## Rodar
1. Instale Node.js 18+.
2. Extraia a pasta e abra o terminal nela.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra o endereço web mostrado pelo Vite (normalmente http://localhost:5173).

O JSON Server roda em http://localhost:3000 e grava os dados no `db.json`.

## Acesso inicial
- E-mail: `maria@exemplo.com`
- Senha: `123456`

## Telas e recursos implementados
- Login e cadastro por e-mail/senha (sem Google ou Apple).
- Home com indicadores, últimas ocorrências e comparativo dos bairros com menor/maior volume de relatos.
- Feed de ocorrências com busca e filtros por status.
- Cadastro de usuário com endereço completo (CEP, rua, número, complemento, bairro, cidade e UF).
- Ocorrências e ranking filtrados pela cidade/UF do usuário conectado; relatos novos herdam a cidade do perfil.
- Detalhes do relato, percentual e contagem de avaliações verdadeira/falsa.
- Voto único por usuário/ocorrência na interface (registro em `votes`).
- Histórico filtrado pelas denúncias do usuário autenticado.
- Perfil, edição de dados, ajuda, termos, privacidade e logout.
- Excluir ocorrência própria.
- Splash screen com símbolo enviado e layout mobile-first responsivo.

## Importante
É uma implementação local demonstrativa, não pronta para produção. JSON Server não fornece autenticação segura nem autorização real; senhas ficam em texto simples, e validações client-side podem ser contornadas. Para publicar, implementar backend seguro, hash de senhas, sessões/token, autorização, moderação, política de privacidade/LGPD, armazenamento de imagens e regras de voto no servidor. Recuperação de senha, mapa geográfico, notificações push e integração com serviços de emergência não estão conectados.
### Ranking por bairro
O painel da página inicial agrupa registros pelo bairro informado e mostra os três menores e maiores volumes. A interface explicita que isso é um retrato dos relatos no sistema, não um índice oficial de segurança nem uma taxa por população. Para um ranking de segurança válido, seriam necessários dados verificados, período definido e denominadores populacionais comparáveis.

## Escopo geográfico
O feed, indicadores, ranking, busca e detalhes consultam apenas ocorrências com cidade e UF iguais às do perfil autenticado. O formulário de ocorrência herda cidade/UF do perfil e pede bairro e endereço do fato. A filtragem no cliente é adequada apenas para demonstração local; em produção, aplique a restrição no backend com autenticação e autorização.
