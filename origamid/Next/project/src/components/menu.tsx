import { cookies } from "next/headers";
import Link from "next/link";

type Account = {
	autorizado: boolean;
	usuario: string;
};

export default async function Menu() {
	const token = cookies().get("token");

	const response = await fetch("https://api.origamid.online/conta/perfil", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token?.value,
		},
	});

	const account: Account = response.ok
		? ((await response.json()) as Account)
		: { autorizado: false, usuario: "" };

	return (
		<ul className="menu">
			<li>
				<Link href="/imc">Imc</Link>
			</li>

			<li>
				<Link href="/cursos">Cursos</Link>
			</li>

			<li>
				{account.autorizado ? account.usuario : <Link href="/login">Login</Link>}
			</li>

			<li>
				<Link href="/products">Produtos</Link>
			</li>

			<li>
				<Link href="/products/add">Adicionar Produto</Link>
			</li>
		</ul>
	);
}
