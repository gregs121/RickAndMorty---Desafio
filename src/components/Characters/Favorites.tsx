import { createContext, useReducer, useContext } from "react";
import type { Character } from "./types";

type Action =
  | { type: 'ADICIONAR'; character: Character }
  | { type: 'REMOVER'; idCharacter: number }
  | { type: 'LIMPAR' };

const reducerFavorites = (state: Character[], action: Action): Character[] => {
  switch (action.type) {
    case 'ADICIONAR':
      if (state.find((c) => c.id === action.character.id)) return state;
      return [...state, action.character];

    case 'REMOVER':
      return state.filter((c) => c.id !== action.idCharacter);

    case 'LIMPAR':
      return [];

    default:
      return state;
  }
};

type ContextType = {
  listFavorites: Character[];
  dispatch: React.Dispatch<Action>;
};

const FavContext = createContext<ContextType | null>(null);

export const FavProvider = ({ children }: { children: React.ReactNode }) => {
  const [listFavorites, dispatch] = useReducer(reducerFavorites, []);

  
  return (
    <FavContext.Provider value={{ listFavorites, dispatch }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavContext);
  if (!context) throw new Error('Erro: Favoritos não encontrado');
  return context;
};