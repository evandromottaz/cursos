"use client";
import Link from "next/link";

export default function Menu() {
	return (
		<ul className="menu">
			<Link href="/imc">Imc</Link>
			<Link href="/cursos">Cursos</Link>

			<div>{localStorage.getItem("user") || <Link href="/login">Login</Link>}</div>
		</ul>
	);
}
