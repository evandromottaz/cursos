import Link from "next/link";

export default function Menu() {
	return (
		<ul className="menu">
			<Link href="/imc">Imc</Link>
			<Link href="/cursos">Cursos</Link>
		</ul>
	);
}
