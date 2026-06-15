import { useState } from 'react';
import { FavProvider, useFavorites } from './components/Characters/Favorites';
import Header from './components/Characters/Header';
import InputSearch from './components/Characters/Search';
import List from './components/Characters/List';
import './App.css';

const Sidebar = () => {
  const { listFavorites, dispatch } = useFavorites();

  return (
    <aside style={{
      width: '220px',
      minWidth: '220px',
      borderLeft: '1px solid #ccc',
      padding: '16px',
      position: 'sticky',
      top: 0,
      alignSelf: 'flex-start',
      maxHeight: '100vh',
      overflowY: 'auto',
    }}>
      <h2 style={{ color: '#000', marginTop: 0 }}>
        Favoritos ({listFavorites.length})
      </h2>

      {listFavorites.length === 0 ? (
        <p style={{ color: '#888', fontSize: '14px' }}>Nenhum favorito ainda.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px 0' }}>
            {listFavorites.map((c) => (
              <li key={c.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}>
                <img src={c.image} alt={c.name} width={40} height={40}
                  style={{ borderRadius: '50%', objectFit: 'cover' }} />
                <span style={{ color: '#000', fontSize: '14px', flex: 1 }}>{c.name}</span>
                <button
                  onClick={() => dispatch({ type: 'REMOVER', idCharacter: c.id })}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                  title="Remover"
                >✕</button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch({ type: 'LIMPAR' })}>
            Limpar tudo
          </button>
        </>
      )}
    </aside>
  );
};

function App() {
  const [busca, setBusca] = useState('');

  return (
    <FavProvider>
      <Header />
      <div style={{ display: 'flex' }}>
        <main style={{ flex: 1, padding: '0 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
            <InputSearch value={busca} onChange={setBusca} />
          </div>
          <List busca={busca} />
        </main>
        <Sidebar />
      </div>
    </FavProvider>
  );
}

export default App;
