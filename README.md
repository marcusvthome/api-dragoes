# 🐉 API Dragões — Dragonpedia

API REST dos dragões das Crônicas de Gelo e Fogo, desenvolvida com Node.js, Express, Prisma e PostgreSQL.

## Índice

- [Visão geral](#visão-geral)
  - [Endpoints](#endpoints)
- [Meu processo](#meu-processo)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Próximos passos](#próximos-passos)
- [Autor](#autor)

## Visão geral

### Endpoints

- GET    /dragoes         → lista todos os dragões
- POST   /dragoes         → cadastra um dragão
- POST   /dragoes/batch   → cadastra vários dragões de uma vez
- PATCH  /dragoes/:id     → atualiza um dragão
- DELETE /dragoes/:id     → deleta um dragão

## Meu processo

### Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- TypeScript
- Thunder Client

### O que aprendi

Essa foi minha primeira experiência construindo uma API do zero. Fiz com calma para entender com clareza cada passo — o que é um endpoint, como funciona o CRUD, o que é um ORM, variáveis de ambiente e string de conexão com banco de dados. Também aprendi na prática como migrar dados entre bancos diferentes (de SQL Server para PostgreSQL), incluindo scripts de migração de dados e deploy em nuvem.

### Próximos passos

API já conectada a um frontend em Next.js (Dragonpedia). Os próximos passos incluem finalizar o deploy completo em produção e seguir enriquecendo os detalhes de cada dragão.

## Autor

- GitHub - [@marcusvthome](https://github.com/marcusvthome)
- Frontend Mentor - [@marcusvthome](https://www.frontendmentor.io/profile/marcusvthome)