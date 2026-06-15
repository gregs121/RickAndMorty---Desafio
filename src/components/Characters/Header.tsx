import { useFavorites } from "./Favorites";

const Header = () => {
  const { listFavorites, dispatch } = useFavorites();

  return (
    <header style={{ textAlign: 'center' }}>
      <h1>Rick and Morty</h1>
      <div>
        <span>Favoritos: {listFavorites.length}</span>
        <br />
        <button onClick={() => dispatch({ type: 'LIMPAR' })}>
          Limpar favoritos
        </button>
      </div>
    </header>
  );
};

export default Header;