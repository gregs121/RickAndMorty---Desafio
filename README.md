# Rick and Morty - Favoritos

Aplicação React para listar personagens da API do Rick and Morty com sistema de favoritos.

## Funcionalidades

- Lista personagens da API ao carregar a página
- Campo de busca para filtrar pelo nome
- Adicionar e remover personagens dos favoritos
- Limpar todos os favoritos de uma vez
- Contador de favoritos no cabeçalho

## Tecnologias

- React
- TypeScript
- Vite

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/
│   └── Characters/
│       ├── Card.tsx
│       ├── List.tsx
│       ├── Favorites.tsx
│       ├── Header.tsx
│       ├── Search.tsx
│       ├── useCharacters.ts
│       └── types.ts
└── App.tsx
```

## API

Dados consumidos de [https://rickandmortyapi.com](https://rickandmortyapi.com)
