"use client";

import setLogin from "@/actions/set-login";
import { FormEvent } from "react";

const onSubmitRouteHandler = async (e: FormEvent<HTMLFormElement>) => {
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

const onSubmitAction = async (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	const username = e.currentTarget.username.value;
	const password = e.currentTarget.password.value;

	const response = await setLogin(username, password);

	if (response.autorizado) location.href = "/";
};

export default function Form() {
	return (
		<form onSubmit={onSubmitAction}>
			<input type="text" placeholder="Usuário" name="username" required />

			<input type="password" placeholder="Senha" name="password" required />

			<button>Enviar</button>
		</form>
	);
}
