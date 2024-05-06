"use server";

import { cookies } from "next/headers";

export default async function setLogin(username: string, password: string) {
	const response = await fetch("https://api.origamid.online/conta/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password }),
	});

	if (!response.ok) {
		return {
			autorizado: false,
		};
	}

	const data = (await response.json()) as { token: string };
	cookies().set("token", data.token, { httpOnly: true, secure: true });

	return {
		autorizado: true,
	};
}
