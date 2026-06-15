import useCharacters from "./useCharacters";
import { useFavorites } from "./Favorites";
import Card from "./Card";

type ListProps = {
  busca: string;
};

const List = ({ busca }: ListProps) => {
  const { characters, loading, error } = useCharacters(busca);
  const { listFavorites } = useFavorites();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  const favoriteIds = new Set(listFavorites.map((c) => c.id));
  const nonFavorites = characters.filter((c) => !favoriteIds.has(c.id));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {nonFavorites.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default List;
