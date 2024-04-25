interface CourseTitle {
	id: number;
	slug: string;
	nome: string;
	descricao: string;
	total_aulas: number;
	total_horas: number;
}

export async function getCourseList(slug = ""): Promise<CourseTitle[]> {
	try {
		return await (await fetch(`https://api.origamid.online/cursos/${slug}`)).json();
	} catch (error) {
		console.error(error);
		return [];
	}
}
