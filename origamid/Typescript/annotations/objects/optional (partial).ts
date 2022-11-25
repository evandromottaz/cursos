interface Produto {
  nome: string;
  quantidade: number;
}

// Partial<Produto>
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }

const produto1 = {
  nome: "Notebook",
  quantidade: 10,
  cor: "azul",
};

const produto2 = {
  nome: "Geladeira",
  quantidade: 4,
  freezer: true,
};

const produto3 = {
  nome: "Instalação",
};

function mostrarQuantidade(produto: Partial<Produto>) {
  // erro, quantidade pode ser undefined
  console.log(produto.quantidade + 20);
}
