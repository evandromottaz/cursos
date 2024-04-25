# Server Fetch

Server Components podem ser definidos como funções assíncronas, assim podemos fazer o fetch de dados no servidor e retornar o componente com os dados já disponíveis.

Se você estiver criando uma aplicação Full-Stack, você pode também acessar o banco de dados diretamente no componente.

```js
type Produto = {
	nome: string;
	id: number;
};

export default async function ServerFetch() {
	const response = await fetch("https://api.origamid.online/produtos");
	const data = (await response.json()) as Produto[];

	return (
		<ul>
			{data.map((produto) => (
				<li key={produto.id}>{produto.nome}</li>
			))}
		</ul>
	);
}
```

# Client Fetch

Podemos ainda fazer o fetch de dados no client, utilizando o `useEffect` e `useState`. Porém esses dados não serão pré-renderizados no servidor.

```js
"use client";

import React from "react";

type Produto = {
	nome: string;
	id: number;
};

export default function ClientFetch() {
	const [data, setData] = React.useState<Produto[]>([]);

	React.useEffect(() => {
		async function fetchProducts() {
			const response = await fetch("https://api.origamid.online/produtos");
			const json = (await response.json()) as Produto[];
			setData(json);
		}
		fetchProducts();
	}, []);

	return (
		<ul>
			{data.map((produto) => (
				<li key={produto.id}>{produto.nome}</li>
			))}
		</ul>
	);
}
```
