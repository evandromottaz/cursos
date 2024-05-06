# Cache

As informações desta aula são sobre o fetch no servidor. Por padrão o next usa o force-cache, que irá criar um cache persistente do fetch.

```js
// cache: 'force-cache' | 'no-store'
await fetch("https://api.origamid.online/acoes/lua", {
	cache: "no-store",
});
```

## revalidate

O revalidate é o tempo em segundos que o next irá revalidar o cache do fetch.

A revalidação ocorre após a requisição, logo os novos dados só estarão disponíveis na próxima requisição. Usando o `0` irá prevenir o cache.

```js
// revalidate: false | 0 | number
await fetch("https://api.origamid.online/acoes/lua", {
	next: {
		revalidate: 5, // revalida a cada 5 segundos
	},
});
```

```js
// page.tsx
export const revalidate = 5;
```

## revalidatePath

É uma função que recebe `path` de uma rota e revalida o cache da mesma. Pode ser executada no servidor, em Route Handlers e Server Actions.

```js
// actions/revalidate-path.ts
"use server";

import { revalidatePath } from "next/cache";

export async function revalidatePathAction(path: string) {
	revalidatePath(path);
}
```

```js
// components/atualizar.tsx
"use client";
import { revalidatePathAction } from "@/actions/revalidate-path";

export default function Atualizar() {
	return <button onClick={() => revalidatePathAction("/acoes")}>Atualizar</button>;
}
```

## revalidateTags

Podemos definir tags durante o fetch e revalidar o cache de todas as rotas que possuem a mesma tag.

Pode ser usada para revalidar uma lista de produtos, quando um novo produto for postado.

```js
const response = await fetch("https://api.origamid.online/acoes/lua", {
	next: {
		tags: ["acoes"],
	},
});
```

```js
import { revalidateTag } from "next/cache";

revalidateTag("acoes");
```
