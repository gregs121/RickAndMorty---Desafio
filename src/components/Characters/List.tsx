import useCharacters from "./useCharacters";
import Card from "./Card";

type ListProps = {
  busca: string;
};

const List = ({ busca }: ListProps) => {
  const { characters, loading, error } = useCharacters(busca);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default List;
