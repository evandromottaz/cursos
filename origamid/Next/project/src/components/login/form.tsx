"use client";
import { FormEvent, useState } from "react";

export default function Form() {
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const username = e.currentTarget.username.value;
		const password = e.currentTarget.password.value;

		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) location.href = "/";
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" placeholder="Usuário" name="username" required />

			<input type="password" placeholder="Senha" name="password" required />

			<button>Enviar</button>
		</form>
	);
}
