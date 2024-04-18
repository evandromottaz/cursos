"use client";

import { FormEvent, useState } from "react";

interface CalcImcProps {
	height: number;
	weight: number;
}

export const IMC_ERROR_MESSAGE = "Você não passou um IMC para calcular!";

export const imcCategories = {
	THINNESS: "MAGREZA",
	NORMAL: "NORMAL",
	OVERWEIGHT: "SOBREPESO",
	OBESITY: "OBESIDADE",
	SEVERE_OBESITY: "OBESIDADE GRAVE",
};

export function calcImc({ height, weight }: CalcImcProps) {
	const imc = weight / (height * 2);
	return +imc.toFixed(2).replace(/\d$/, "");
}

export function getImcCategory(imc: number) {
	if (imc < 18.5) {
		return imcCategories.THINNESS;
	}

	if (imc >= 18.5 && imc < 25) {
		return imcCategories.NORMAL;
	}

	if (imc >= 25 && imc < 30) {
		return imcCategories.OVERWEIGHT;
	}

	if (imc >= 30 && imc < 40) {
		return imcCategories.OBESITY;
	}

	if (imc >= 40) {
		return imcCategories.SEVERE_OBESITY;
	}

	return IMC_ERROR_MESSAGE;
}

export default function ShowImc() {
	const [result, setResult] = useState(0);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const height = +form.get("height")!;
		const weight = +form.get("weight")!;

		const imc = calcImc({ height, weight });
		setResult(imc);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input type="number" name="height" id="height-imc" step=".1" />
				<input type="" name="weight" id="weight-imc" />
				<button>Calcular</button>
			</form>

			{!!result && (
				<>
					<p data-testid="imc-result">Seu IMC é de {result}</p>
					<p>Sua categoria: {getImcCategory(result)}</p>
				</>
			)}
		</>
	);
}
