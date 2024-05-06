export type Product = {
	id?: string;
	nome: string;
	preco: number;
	descricao: string;
	estoque: number;
	importado: 0 | 1;
};

export default async function ProductsPage() {
	const response = await fetch("https://api.origamid.online/produtos");
	const products = (await response.json()) as Product[];

	return (
		<main>
			<h1>Produtos</h1>

			<ul>
				{products.map(({ id, preco, nome }) => (
					<li key={id}>
						<h2>
							{nome}:{" "}
							{preco.toLocaleString("pt-BR", { currency: "BRL", style: "currency" })}
						</h2>
					</li>
				))}
			</ul>
		</main>
	);
}
