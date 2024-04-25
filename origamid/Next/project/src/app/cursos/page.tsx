import { getCourseList } from "@/api/cursos";
import Link from "next/link";

export default async function CourseListPage() {
	const courseList = await getCourseList();

	return (
		<ul>
			{courseList.map(({ id, descricao, slug }) => (
				<li key={id}>
					<Link href={`cursos/${slug}`}>{descricao}</Link>
				</li>
			))}
		</ul>
	);
}
