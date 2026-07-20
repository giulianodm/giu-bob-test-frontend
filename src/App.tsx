import { useEffect, useState } from 'react';
import type { Linha, Produto } from './types';
import { fetchLinhas, fetchProdutos, fetchProdutosReajustados } from './api';
import { LinhaSelector } from './components/LinhaSelector';
import { ProdutoList } from './components/ProdutoList';
import './catalog.css';

function App() {
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [selectedLinhaId, setSelectedLinhaId] = useState('');
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loadingProdutos, setLoadingProdutos] = useState(false);
  const [reajusteAtivo, setReajusteAtivo] = useState(false);
  const [reajustePercentual, setReajustePercentual] = useState(0);

  useEffect(() => {
    fetchLinhas().then(setLinhas).catch(console.error);
  }, []);

  function carregarProdutos(linhaId: string, ativo: boolean, percentual: number) {
    if (!linhaId) {
      setProdutos([]);
      return;
    }
    setLoadingProdutos(true);
    const fetcher = ativo
      ? fetchProdutosReajustados(linhaId, percentual)
      : fetchProdutos(linhaId);
    fetcher
      .then(setProdutos)
      .catch(console.error)
      .finally(() => setLoadingProdutos(false));
  }

  function handleLinhaChange(id: string) {
    setSelectedLinhaId(id);
    carregarProdutos(id, reajusteAtivo, reajustePercentual);
  }

  function handleReajusteAtivoChange(ativo: boolean) {
    setReajusteAtivo(ativo);
    carregarProdutos(selectedLinhaId, ativo, reajustePercentual);
  }

  function handleReajustePercentualChange(percentual: number) {
    setReajustePercentual(percentual);
    if (reajusteAtivo) {
      carregarProdutos(selectedLinhaId, true, percentual);
    }
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

        <div className="reajuste-controles">
          <label className="reajuste-toggle">
            <input
              type="checkbox"
              checked={reajusteAtivo}
              onChange={(e) => handleReajusteAtivoChange(e.target.checked)}
            />
            Aplicar reajuste de preço
          </label>
          {reajusteAtivo && (
            <label className="reajuste-percentual">
              Percentual (%):
              <input
                type="number"
                value={reajustePercentual}
                onChange={(e) => handleReajustePercentualChange(Number(e.target.value))}
              />
            </label>
          )}
        </div>

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
