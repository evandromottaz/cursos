"use client";
import { ChangeEvent, FormEvent, useState } from "react";

async function getLogin() {
	const response = await fetch("http://localhost:3000/api/login");

	return await response.json();
}

interface User {
	autorizado: boolean;
	usuario: string;
}

interface Auth {
	ok: boolean;
	error: string;
}

export default function Form() {
	if (localStorage.getItem("user")) {
		location.href = "/";
	}

	const [user, setUser] = useState({ username: "", password: "" });
	const [error, setError] = useState("");

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch("http://localhost:3000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		const { error } = (await response.json()) as Auth;

		if (error) {
			setError(error);
			return;
		}

		setError("");

		const { usuario } = (await getLogin()) as User;

		if (usuario) {
			localStorage.setItem("user", usuario);
			location.href = "/";
			return;
		}

		localStorage.removeItem("user");
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUser((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Usuário"
				name="username"
				onChange={onChange}
				required
			/>

			<input
				type="password"
				placeholder="Senha"
				name="password"
				onChange={onChange}
				required
			/>

			<button>Enviar</button>
			{error && <p>{error}</p>}
		</form>
	);
}
