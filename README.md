# ConectaPro Institucional

Site público do ConectaPro: landing page, Termos de Uso, Política de Privacidade e solicitação de exclusão de conta.

## Requisitos e execução

- Node.js 20.19 ou superior
- `npm install`
- Copie `.env.example` para `.env.local` e configure a URL da API e as chaves públicas Web do Firebase
- `npm run dev`

Para publicar: `npm run build` e `npm run start`.

## Rotas públicas

- `/` — landing page
- `/termos-de-uso` — Termos de Uso
- `/politica-de-privacidade` — Política de Privacidade
- `/excluir-conta` — autenticação e solicitação de exclusão de conta e dados

## Domínio

Endereço sugerido para este projeto: `https://conectapro.celemora.com.br`. O painel administrativo fica em `https://painel.conectapro.celemora.com.br`.

Para login Google na página de exclusão, autorize o domínio público no Firebase Authentication. Inclua a origem do site na configuração CORS da API. A URL para a ficha do app na Google Play deve ser `https://conectapro.celemora.com.br/excluir-conta` após a publicação.
