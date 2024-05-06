import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const user = await request.json();

	const response = await fetch("https://api.origamid.online/conta/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	if (!response.ok) {
		cookies().delete("token");
		return Response.json({ error: "Usuário ou senha incorreto" });
	}

	const data = await response.json();
	cookies().set("token", data.token, { secure: true, httpOnly: true });

	return Response.json({ ok: true });
}

export async function GET() {
	const token = cookies().get("token");

	const response = await fetch("https://api.origamid.online/conta/perfil", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token?.value,
		},
	});

	const data = await response.json();

	return Response.json(data);
}
