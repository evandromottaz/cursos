interface CourseProps {
	id: number;
	slug: string;
	nome: string;
	descricao: string;
	total_aulas: number;
	total_horas: number;
}

export async function getCourseList(): Promise<CourseProps[]> {
	try {
		return await (await fetch("https://api.origamid.online/cursos")).json();
	} catch (error) {
		console.error(error);
		return [];
	}
}
