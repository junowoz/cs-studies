# cs-studies

Repositório único com meus estudos de computação: fundamentos de linguagens,
desenvolvimento web, blockchain, machine learning, algoritmos e material de faculdade.

Antes eram vários repositórios separados (`smartContracts`, `laboratory`, `full_stack`,
`machine_learning`, `programacao-linear-grafica-python`, ...). Tudo foi unificado aqui.

## Estrutura

| Pasta | Conteúdo |
|---|---|
| [`languages/`](languages) | Fundamentos por linguagem: C, C++, Go, Java, JavaScript, Kotlin, Python, Rust, TypeScript |
| [`web/`](web) | Full-stack — `frontend/` (HTML, CSS, React, Next), `backend/` (Node, Express, Nest, Django, Spring, APIs, Docker, cloud), `databases/` (SQL, MongoDB) |
| [`blockchain/`](blockchain) | Solidity, Ethereum Developer, playground Hardhat |
| [`algorithms/`](algorithms) | LeetCode, katas do Codewars, estruturas de dados |
| [`machine-learning/`](machine-learning) | Fundamentos de ML e visualização de dados |
| [`coursework/`](coursework) | Faculdade — ENGECO201M01 (Java + banco de dados), programação linear gráfica |
| [`notes/`](notes) | Anotações avulsas: SOLID, Scrum, princípios de design, pesquisa de mercado |

## Convenções

- Nomes de pastas e arquivos em `kebab-case` minúsculo.
  Exceções: arquivos `.java` e `.sol` (nome = nome da classe/contrato) e componentes React.
- Prefixo numérico (`1-`, `2-`, ...) indica ordem de estudo dentro da pasta.
- Nada de binários, `node_modules`, caches ou `.DS_Store` — ver [`.gitignore`](.gitignore).

## Projetos que rodam

| Projeto | Como rodar |
|---|---|
| [`blockchain/hardhat`](blockchain/hardhat) | `npm install && npx hardhat test` |
| [`web/frontend/react`](web/frontend/react) | `pnpm install && pnpm dev` |
| [`web/backend/django/djangovet`](web/backend/django/djangovet) | `python manage.py runserver` |
| [`coursework/programacao-linear-grafica`](coursework/programacao-linear-grafica) | `pip install -r requirements.txt && python main.py` |
