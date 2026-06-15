import { useFavorites } from "./Favorites";
import type { Character } from "./types";

type CardProps = {
  character: Character;
};

const Card = ({ character }: CardProps) => {
  const { listFavorites, dispatch } = useFavorites();

  const jaTaFavoritado = listFavorites.some((c) => c.id === character.id);

  const adicionarOuRemover = () => {
    if (jaTaFavoritado) {
      dispatch({ type: 'REMOVER', idCharacter: character.id });
    } else {
      dispatch({ type: 'ADICIONAR', character: character });
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '6px', width: '200px' }}>
      <img src={character.image} alt={character.name} width={200} />
      <h3 style={{ color: '#000' }}>{character.name}</h3>
      <p style={{ color: '#000' }}>Status: {character.status} | {character.species}</p>
      <button onClick={adicionarOuRemover}>
        {jaTaFavoritado ? 'Remover' : 'Favoritar'}
      </button>
    </div>
  );
};

export default Card;
