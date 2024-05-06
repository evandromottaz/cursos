"use client";

import getCookie from "@/actions/get-cookie";
import { useState } from "react";

export default function Home() {
	const [value, setValue] = useState("");
	const [show, setShow] = useState(false);

	const getCookieValue = async () => {
		const value = await getCookie("token");
		value && setValue(value);
	};

	const showCookie = async () => {
		setShow((prev) => !prev);

		!show ? await getCookieValue() : setValue("");
	};

	return (
		<main>
			<h1>Home:</h1>

			<button onClick={showCookie}>
				{show ? "Esconder token" : "Mostrar token"}
			</button>

			{show && <p>{value}</p>}
		</main>
	);
}
