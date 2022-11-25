interface Produto {
  nome: string;
  preco: number;
}

let chave: keyof Produto;
// let chave: "nome" | "produto";
