# 🎨 Frontend | Next.js

Este é o ambiente visual do nosso projeto, focado em performance e padronização.

## 🛠️ Como rodar apenas o Frontend

Se você vai trabalhar apenas no layout e não precisa do banco de dados local agora, faça o seguinte:

```bash
cd frontend
npm install
npm run dev
```

Abra http://localhost:3000.

## 📐 Regras da Casa

- Onde codar: Todo o fluxo de páginas vive dentro da pasta app/.

- Componentes: Se for criar botões, inputs e cards reutilizáveis, crie uma pasta components/ na raiz do frontend e coloque-os lá.

- Estilização: Use exclusivamente Tailwind CSS. Não crie arquivos .css avulsos.

- Formatação Automática: Este projeto usa Prettier. Ao salvar um arquivo no VSCode, as classes do Tailwind serão ordenadas automaticamente.