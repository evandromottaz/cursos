const { body }: { body: HTMLElement } = document;

function handleData({ nome, preco }: { nome: string; preco: number }) {
  nome.includes("book");
  preco.toFixed();
}

handleData({
  nome: "Notebook",
  preco: 2000,
});
