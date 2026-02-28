Copiar

# GitFind

Aplicação web para buscar perfis e repositórios do GitHub pelo nome de usuário.

## Funcionalidades

- Busca de usuários pelo username do GitHub (`@username`)
- Exibição de foto de perfil, nome, login e bio do usuário
- Listagem dos repositórios públicos com nome e descrição

## Tecnologias

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- CSS Modules
- [GitHub REST API](https://docs.github.com/en/rest)

## Como executar

**Pré-requisitos:** Node.js `^20.19.0` ou `>=22.12.0`

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Pré-visualizar build
npm run preview

# Verificar lint
npm run lint
```

## Estrutura do projeto

```
src/
├── assets/
│   └── background.png
├── components/
│   ├── Button/
│   ├── Header/
│   ├── Input/
│   └── ItemList/
├── pages/
│   └── Home/
├── global.css
└── main.jsx
```