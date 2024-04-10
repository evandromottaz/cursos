"use client";

import { FormEvent, useState } from "react";

interface CalcImcProps {
	height: number;
	weight: number;
}

export function calcImc({ height, weight }: CalcImcProps) {
	const imc = weight / (height * 2);
	return +imc.toFixed(2).replace(/\d$/, "");
}

export default function ShowImc() {
	const [result, setResult] = useState("");

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const height = +form.get("height")!;
		const weight = +form.get("weight")!;

		const imc = calcImc({ height, weight });
		setResult(imc.toString());
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input type="number" name="height" id="height-imc" step=".1" />
				<input type="" name="weight" id="weight-imc" />
				<button>Calcular</button>
			</form>

			{!!result && <p data-testid="imc-result">Seu IMC é de {result}</p>}
		</>
	);
}
