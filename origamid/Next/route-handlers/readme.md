# Routes

Podemos criar rotas de api's JSON no Next.js. Basta criar um arquivo chamado route.ts dentro de uma rota, exemplo: api/route.ts.

Possui os métodos GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS.

Não é possível ter page.tsx e route.ts na mesma rota.

```js
// app/api/route.ts
export async function GET() {
	return Response.json({
		method: "GET",
		ok: true,
	});
}

export async function POST() {
	return Response.json({
		method: "POST",
		ok: true,
	});
}
```

Pode ser usado para esconder chaves de api's, por exemplo.

```js
export async function GET() {
	const response = await fetch("https://api.origamid.online/vendas", {
		headers: {
			apikey: "ORIGAMID123456",
		},
	});
	const vendas = await response.json();

	return Response.json(vendas);
}
```

## API's Servidor/Web

Acesso a api's web do servidor como cookies, headers, etc.

```js
// app/api/login/route.ts
import { cookies } from "next/headers";

export async function GET() {
	const response = await fetch("https://api.origamid.online/conta/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "dog",
			password: "dog",
		}),
	});
	const data = await response.json();
	cookies().set("token", data.token, {
		secure: true,
		httpOnly: true,
		sameSite: "lax",
	});
	return Response.json(data);
}
```

```js
// app/api/perfil/route.ts
import { cookies } from "next/headers";

export async function GET() {
	const token = cookies().get("token")?.value;
	const response = await fetch("https://api.origamid.online/conta/perfil", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	const data = response.ok ? await response.json() : null;
	return Response.json(data);
}
```

## Cookies

O Next.js possui a função `cookies` que permite acessar e criar HTTP Cookies.

```js
import { cookies } from "next/headers";

export async function GET() {
	cookies().get("token")?.value;
	cookies().getAll();

	// apenas em Route Handlers e Server Actions
	cookies().has("token");
	cookies().set("token", data.token, {
		secure: true,
		httpOnly: true, // sem acesso no cliente
		sameSite: "lax",
	});
	cookies().delete("token");

	return Response.json({ cookies: true });
}
```

## Request

Acesso ao objeto request do servidor.

https://nextjs.org/docs/app/api-reference/functions/next-request

https://developer.mozilla.org/pt-BR/docs/Web/API/Request
