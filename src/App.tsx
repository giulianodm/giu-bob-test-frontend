import { useEffect, useState } from 'react';
import type { Linha, Produto } from './types';
import { fetchLinhas, fetchProdutos } from './api';
import { LinhaSelector } from './components/LinhaSelector';
import { ProdutoList } from './components/ProdutoList';
import './catalog.css';

function App() {
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [selectedLinhaId, setSelectedLinhaId] = useState('');
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loadingProdutos, setLoadingProdutos] = useState(false);

  useEffect(() => {
    fetchLinhas().then(setLinhas).catch(console.error);
  }, []);

  function handleLinhaChange(id: string) {
    setSelectedLinhaId(id);
    if (!id) {
      setProdutos([]);
      return;
    }
    setLoadingProdutos(true);
    fetchProdutos(id)
      .then(setProdutos)
      .catch(console.error)
      .finally(() => setLoadingProdutos(false));
  }

  const selectedLinha = linhas.find((l) => l.id === selectedLinhaId);

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>Catálogo de Cosméticos</h1>
        <p>Consulte os produtos disponíveis por linha</p>
      </header>

      <main className="catalog-main">
        <LinhaSelector
          linhas={linhas}
          selectedId={selectedLinhaId}
          onChange={handleLinhaChange}
        />

        {selectedLinha && (
          <h2 className="linha-titulo">{selectedLinha.nome}</h2>
        )}

        <ProdutoList
          produtos={produtos}
          loading={loadingProdutos}
          selectedLinhaId={selectedLinhaId}
        />
      </main>
    </div>
  );
}

export default App;
