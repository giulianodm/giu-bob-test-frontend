import type { Produto } from '../types';
import { ProdutoCard } from './ProdutoCard';

interface Props {
  produtos: Produto[];
  loading: boolean;
  selectedLinhaId: string;
}

export function ProdutoList({ produtos, loading, selectedLinhaId }: Props) {
  if (!selectedLinhaId) {
    return <p className="empty-state">Selecione uma linha para ver os produtos.</p>;
  }

  if (loading) {
    return <p className="empty-state">Carregando produtos...</p>;
  }

  if (produtos.length === 0) {
    return <p className="empty-state">Nenhum produto encontrado para esta linha.</p>;
  }

  return (
    <div className="produto-grid">
      {produtos.map((p) => (
        <ProdutoCard key={p.id} produto={p} />
      ))}
    </div>
  );
}
