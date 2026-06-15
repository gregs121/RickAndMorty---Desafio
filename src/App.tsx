import { useState } from 'react';
import { FavProvider } from './components/Characters/Favorites';
import Header from './components/Characters/Header';
import InputSearch from './components/Characters/Search';
import List from './components/Characters/List';
import './App.css';

function App() {
  const [busca, setBusca] = useState('');

  return (
    <FavProvider>
      <Header />
      <main style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
          <InputSearch value={busca} onChange={setBusca} />
        </div>
        <List busca={busca} />
      </main>
    </FavProvider>
  );
}

export default App;
