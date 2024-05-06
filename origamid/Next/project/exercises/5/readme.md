- [ ] Criar as rotas /produtos e /produtos/adicionar
- [ ] Na rota /produtos, faça um fetch para https://api.origamid.online/produtos e mostre a lista de produtos
- [ ] Na rota /produtos/adicionar, crie um formulário para adicionar um produto.
- [ ] Crie uma server action que faz um fetch ('POST') para https://api.origamid.online/produtos
- [ ] O 'POST' deve possuir o tipo Produto abaixo, sem id
- [ ] Quando o produto for adicionado, revalide a rota /produtos
- [ ] Após revalidar, redirecione para a rota /produtos

```js
export type Produto = {
	id?: string,
	nome: string,
	preco: number,
	descricao: string,
	estoque: number,
	importado: 0 | 1,
};
```
