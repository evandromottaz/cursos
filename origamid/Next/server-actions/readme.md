# Server Actions

Funções que são executadas no servidor, mas podem ser iniciadas pelo cliente. Coloque no início da função `'use server'` ou no início do arquivo. As funções devem ser assíncronas.

São ativadas automaticamente através de um `fetch ('POST')`. Basicamente são endpoints de api's criados automaticamente.

A função não é exposta no cliente, são seguras para informações sensíveis.

```js
"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string) {
	cookies().set(key, value, {
		httpOnly: true,
	});
	return { definido: true, key, value };
}
```

## Ativar Server Actions

Podem ser ativadas por eventos, useEffect, formulários e mais.

```js
"use client";

import { setCookie } from "@/actions/set-cookie";
import React from "react";

export default function HomePage() {
	async function handleClick() {
		const response = await setCookie("segredo", "123456");
		console.log(response);
	}

	React.useEffect(() => {
		setCookie("width", document.documentElement.clientWidth.toString());
	}, []);

	return (
		<main>
			<h1>Home</h1>
			<button onClick={handleClick}>Action</button>
		</main>
	);
}
```

### Actions vs Handlers

#### Server Actions

- Configura automaticamente o endpoint
- É possível passar como ação de um formulário
- Não expõe o endpoint no cliente
- Pode retornar JSX
- Permite revalidarmos o cache

#### Route Handlers

- Precisamos configurar o endpoint
- Pode ser utilizado por serviços externos
- Não pode retornar JSX
