"use client";

import addProduct from "@/actions/add-product";
import { FormEvent } from "react";

export default function FormProduct() {
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const nome = e.currentTarget.nome.value;
		const preco = +e.currentTarget.preco.value;
		const descricao = e.currentTarget.descricao.value;
		const estoque = +e.currentTarget.estoque.value;
		const importado = e.currentTarget.importado.checked ? 1 : 0;

		addProduct({ nome, preco, descricao, estoque, importado });
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" name="nome" placeholder="Nome" />
			<input type="number" name="preco" placeholder="Preço" />
			<input type="text" name="descricao" placeholder="Descrição" />
			<input type="number" name="estoque" placeholder="Estoque" />
			<label htmlFor="importado">
				<input type="checkbox" name="importado" id="importado" />
				Importado
			</label>

			<button>Adicionar</button>
		</form>
	);
}
