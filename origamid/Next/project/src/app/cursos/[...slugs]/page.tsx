import { getCourse } from "@/api/cursos";
import Link from "next/link";
import s from "../../page.module.css";

type Params = {
	params: {
		slugs: string[];
	};
};

export default async function CoursePage({ params }: Params) {
	const slugs = params.slugs.join("/");
	const course = await getCourse(slugs);

	console.log(course);

	return (
		<main className={s.main}>
			<h2 className={s.title}>{course?.nome}</h2>
			<p className={s.description}>{course?.descricao}</p>

			<div className="flex">
				{course?.total_aulas && <p>{course?.total_aulas} aulas</p>}
				{course?.total_horas && <p>{course?.total_horas} horas de duração</p>}
				{course?.tempo && <p>{course?.tempo} minutos</p>}
			</div>

			{course?.aulas?.length && <h2>Cursos</h2>}

			<ul className={s.grid}>
				{course?.aulas?.map(({ descricao, curso_id, nome, tempo, slug }) => (
					<li key={curso_id}>
						<Link href={`${slugs}/${slug}`} className={s.card}>
							<h2 className={s.card__title} data-duration={`${tempo} minutos`}>
								{nome}
							</h2>

							<p className={s.card__description}>{descricao}</p>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
