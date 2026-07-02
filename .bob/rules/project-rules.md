# Regras de Escopo e Tecnologia - Frontend

Você está operando no módulo de Interface do Usuário (UI).

## Tecnologias Permitidas
- React (Framework)
- Vite (Build tool/Bundler)
- TypeScript / TSX
- Tailwind CSS / Styled Components (Seu framework de estilo)

## Restrições Estritas
- PROIBIDO criar conexões diretas a bancos de dados, queries SQL ou ler variáveis de ambiente de banco (`DATABASE_URL`, etc.).
- PROIBIDO criar servidores HTTP (Express, etc.).
- Toda e qualquer busca de dados deve ser feita via requisições HTTP (fetch/axios) consumindo os endpoints que serão fornecidos pelo repositório `backend`.