import type { Produto } from '../types';

interface Props {
  produto: Produto;
}

export function ProdutoCard({ produto }: Props) {
  return (
    <div className="produto-card">
      <span className="produto-nome">{produto.nome}</span>
    </div>
  );
}
