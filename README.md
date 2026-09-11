# cs-studies

Repositório único com meus estudos de computação: fundamentos de linguagens, desenvolvimento
web, blockchain, machine learning, algoritmos e material de faculdade.

Antes eram vários repositórios separados (`smartContracts`, `laboratory`, `full_stack`,
`machine_learning`, `computer_science`, `katas_codewars`, `lista_encadeada`, `ENGECO201M01`,
`programacao-linear-grafica-python`). Tudo foi unificado aqui, num único histórico git.

## Estrutura

```
languages/          fundamentos por linguagem — sempre concepts/ (teoria) e projects/ (prática)
  c/ cpp/ go/ java/ javascript/ kotlin/ python/ rust/ typescript/
web/
  frontend/         html/ css/ react/ next/   (cada uma com concepts, cheatsheets, projects)
  backend/          node/ express/ nest/ django/ spring/ apis/ docker/ cloud/
  databases/        sql/ mongodb/
blockchain/
  solidity/         concepts/ contracts/ crypto-zombies/ docs/
  ethereum/         curso Ethereum Developer (criptografia, assinaturas)
  hardhat/          projeto Hardhat rodável
  building-a-blockchain/   blockchain do zero em Python
algorithms/
  big-o-notation.js
  data-structures/  introdução + lista encadeada em C
  searching/        binary search
  leetcode/         exercícios
  katas-codewars/
machine-learning/   fundamentals/ visualize-data/
coursework/         material de faculdade
  engeco201m01/     Java (POO, exercícios, prova) + banco de dados
  algoritmos-e-estruturas-de-dados/   listas, parciais e provas em C
  programacao-linear-grafica/         projeto Python rodável
notes/              anotações avulsas: SOLID, Scrum, design de software, pesquisa de mercado
```

## Convenções

- Pastas e arquivos em `kebab-case` minúsculo.
  Exceções: `.java` e `.sol` (nome = nome da classe/contrato) e componentes React.
- Dentro de cada tecnologia: `concepts/` = anotações e estudo teórico; `projects/` e
  `examples/` = código que roda; `cheatsheets/` = PDFs do curso.
- Prefixo numérico (`1-`, `2-`, ...) indica a ordem de estudo dentro da pasta.
- Material com data de entrega, lista ou prova mora em `coursework/`, não em `languages/`.
- Sem binários, `node_modules`, caches ou `.DS_Store` — ver [`.gitignore`](.gitignore).

## Projetos que rodam

| Projeto | Como rodar |
|---|---|
| [`blockchain/hardhat`](blockchain/hardhat) | `npm install && npx hardhat test` |
| [`web/frontend/react/playground`](web/frontend/react/playground) | `pnpm install && pnpm dev` |
| [`web/backend/django/projects/djangovet`](web/backend/django/projects/djangovet) | `python manage.py runserver` |
| [`web/backend/express`](web/backend/express) | `npm install && node examples/basic-app.js` |
| [`languages/go/projects/simple-go-api`](languages/go/projects/simple-go-api) | `go run main.go` |
| [`coursework/programacao-linear-grafica`](coursework/programacao-linear-grafica) | `pip install -r requirements.txt && python main.py` |
