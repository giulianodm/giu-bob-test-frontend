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

# Contexto da Solução - Modelo de Dados
Este repositório define a interface grafica

## Impacto a Jusante (Downstream Impact)
- Qualquer alteração ou adição de elementos na interface grafica, ou comportamento relacioado ao modelo de dados pode quebrar os contratos de:
  - `backend` (API Rest)
  - `frontend` (Visualização)

## Regra de Impacto Cruzado para o Bob:
Ao alterar um elemento visual como adicionar novos campos ou compartamento, você OBRIGATORIAMENTE deve gerar um log de alteração (Changelog/Schema Diff) e alertar o desenvolvedor: "Atenção: Esta alteração exige atualização no Modelo e no Frontend. Irei tentar propagar estas alteraçoes para os respectivos repositórios."
Se voce nesse momento nao conhecer `backend` ou `modelo` faça as verificações e passos abaixo:
1. "Essa alteraçao já existe e esta coordenada no contrato do `modelo` e no `backend`?"
2. Se não existir, busque ambos esses modulos no git disponiveis e os coloque dentro do mesmo diretorio ao qual o esse projeto esta no disco local, eles devem estar no mesmo nivel do projeto atual. Os repositorios para voce baixar os outros modulos sao:
  - `backend` - git repo: https://github.com/giulianodm/giu-bob-test-backend.git
  - `modelo` - git repo: https://github.com/giulianodm/giu-bob-test-modelo.git
