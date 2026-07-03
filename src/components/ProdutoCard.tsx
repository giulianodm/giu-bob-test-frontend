import type { Produto } from '../types';

interface Props {
  produto: Produto;
}

export function ProdutoCard({ produto }: Props) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="produto-card">
      <span className="produto-nome">{produto.nome}</span>
      <span className="produto-preco">{precoFormatado}</span>
    </div>
  );
}
