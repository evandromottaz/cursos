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
		return Response.json(
			{ autorizado: false, error: "Usuário ou senha incorreto" },
			{ status: 401 }
		);
	}

	const data = await response.json();
	cookies().set("token", data.token, { secure: true, httpOnly: true });

	return Response.json(data);
}
