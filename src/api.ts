import type { Linha, Produto } from './types';

export async function fetchLinhas(): Promise<Linha[]> {
  const res = await fetch('/api/linhas');
  if (!res.ok) throw new Error('Erro ao buscar linhas');
  return res.json();
}

export async function fetchProdutos(linhaId: string): Promise<Produto[]> {
  const res = await fetch(`/api/linhas/${linhaId}/produtos`);
  if (!res.ok) throw new Error('Erro ao buscar produtos');
  return res.json();
}

export async function fetchProdutosReajustados(linhaId: string, reajuste: number): Promise<Produto[]> {
  const res = await fetch(`/api/linhas/${linhaId}/produtos/reajustados?reajuste=${reajuste}`);
  if (!res.ok) throw new Error('Erro ao buscar produtos reajustados');
  return res.json();
}
