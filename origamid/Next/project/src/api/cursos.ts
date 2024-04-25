interface CourseTitle {
	id: number;
	slug: string;
	nome: string;
	descricao: string;
	total_aulas: number;
	total_horas: number;
}

interface Lesson extends Pick<CourseTitle, "id" | "slug" | "descricao" | "nome"> {
	curso_id: number;
	tempo: number;
	ordem: number;
}

interface Course extends CourseTitle {
	curso_id?: number;
	tempo?: number;
	ordem?: number;
	aulas?: Lesson[];
}

export async function getCourseList(slug = ""): Promise<CourseTitle[]> {
	try {
		return await (await fetch(`https://api.origamid.online/cursos/${slug}`)).json();
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getCourse(slug = ""): Promise<Course | null> {
	try {
		return await (await fetch(`https://api.origamid.online/cursos/${slug}`)).json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
