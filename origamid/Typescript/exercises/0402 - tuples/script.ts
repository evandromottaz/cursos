// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchProduto2() {
  const res = await fetch("https://api.origamid.dev/json/vendas.json");
  const json = await res.json();
  let total = 0;
  if (json && Array.isArray(json))
    json.forEach((item) => {
      const [_, preco]: [string, number] = item;
      total += preco;
    });

  if (total !== 0) {
    document.body.innerText = total.toString();
  }
}
fetchProduto2();
