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

# Contexto da Solução - Frontend
Este repositório é a interface de vendas de cosméticos.

## Dependências de Negócio (Contratos Remotos)
- Depende de: `modelo-dados` (Especificação de Tipos e Entidades)
- Consome de: `backend` (Endpoints de API)

## Regra de Impacto Cruzado para o Bob:
Se o desenvolvedor pedir uma alteracao no modelo de dados, como por exemplo  adicionar um novo campo na interface (ex: exibir "preço" ou "desconto") que não esteja mapeado nos mocks locais, pergunte ao usuário:
1. "Esse campo já existe no contrato do `backend` e no `modelo-dados`?"
2. Se não existir, instrua o usuário a fornecer a URL Git ou o caminho local desses repositórios para que eu possa planejar a alteração neles primeiro.