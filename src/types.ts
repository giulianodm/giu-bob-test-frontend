export interface Linha {
  id: string;
  nome: string;
}

export interface Produto {
  id: string;
  nome: string;
  linhaId: string;
  preco: number;
}
