# Server Components

Possuem acesso a API do servidor (Node) como o `fs`, `path`, e outras implementadas pelo Next.js como o `fetch` e `cookies`. Renderizam no servidor.

Por padrão, todos os componentes são Server Components.

```js
// page.tsx -> server component
export default function HomePage() {
	return (
		<main>
			<h1>Home</h1>
		</main>
	);
}
```

```js
// @/component/acessos -> server component
import fs from "fs/promises";

export default async function Acessos() {
	await fs.appendFile("acesso.txt", `${Date.now()} `, "utf8");
	const data = await fs.readFile("acesso.txt", "utf8");

	return <div>{data}</div>;
}
```

# Client Components

Possui acesso as APIs web como `window` e `document`, bem como as APIs do Next.js e do React, como `useState` e `useEffect`. Continuam sendo pré-renderizados no servidor, mas são "hidratados" (Hydration) no cliente.

Para definir um componente como Client Component, basta adicionar `'use client'` na primeira linha do componente.

```js
"use client";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Incrementar</button>
		</div>
	);
}
```

# Nested Components

Server Components podem conter Client e Server Components, mas Client Components **não podem** conter Server Components.

Evite definir páginas (page.tsx) como Client Components, mantenha elas sempre como Server Components, assim elas podem receber Server e Client Components.

```js
// page.tsx
import Acessos from "@/components/acessos"; // server
import Counter from "@/components/counter"; // client

export default async function HomePage() {
	return (
		<main>
			<h1>Home</h1>
			<Acessos />
			<Counter />
		</main>
	);
}
```

# Pré-renderização

Client Components são pré-renderizados no servidor, durante a pré-renderização, não temos acesso a APIs web como `window` e `document`. Por isso erros como `document is not defined` podem ocorrer.

Se o código estiver dentro do useEffect, ele só será ativado no cliente, por isso não teremos problemas. Mas códigos fora do useEffect podem causar erros.

```js
"use client";
import React from "react";

export default function Width() {
	// erro
	const [width, setWidth] = React.useState(document.documentElement.clientWidth);

	return <p>Width: {width}</p>;
}
```

```js
// solução de importação
import dynamic from "next/dynamic";

export const Width = dynamic(() => import("@/components/width"), {
	ssr: false,
});

export default function HomePage() {
	return (
		<main>
			<h1>Home</h1>
			<Width />
		</main>
	);
}
```
