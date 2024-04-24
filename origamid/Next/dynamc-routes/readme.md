# Dynamic Routes

Uma pasta com o nome entre colchetes `[id]`, indica que a rota é dinâmica. `id` será o nome do parâmetro que será passado para a página. O acesso ao parâmetro fica dentro da propriedade `params`.

```js
// produtos/[id]/page.tsx
type Produto = {
	id: number;
	nome: string;
	descricao: string;
	preco: number;
};

type PageParams = {
	params: {
		id: string;
	};
};

export default async function ProdutoPage({ params }: PageParams) {
	const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
	const data = (await response.json()) as Produto;

	return (
		<main>
			<h1>Produto: {params.id}</h1>
			<h2>R$ {data.preco}</h2>
			<p>{data.descricao}</p>
		</main>
	);
}
```

# [...slugs]

Se o nome da pasta conter `...` antes do nome do parâmetro, será possível acessar rotas como: `/curso/nome-do-curso/aula/nome-da-aula`. Automaticamente uma array com os parâmetros será passado para a página.

```js
// cursos/[...slugs]/page.tsx
type PageParams = {
	params: {
		slugs: string[],
	},
};

export default function CursosPage({ params }: PageParams) {
	return (
		<div>
			{params.slugs.map((slug, index) => {
				return <div key={index}>{slug}</div>;
			})}
		</div>
	);
}
```
