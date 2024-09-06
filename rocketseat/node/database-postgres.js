import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
	async list(search) {
		if (!search) return await sql`select * from videos`;

		return await sql`select * from videos where title ilike ${"%" + search + "%"}`;
	}

	async create(video) {
		const videoId = randomUUID();
		const { title, description, duration } = video;
		await sql`insert into videos (id, title, description, duration, created_at) values (${videoId}, ${title}, ${description}, ${duration}, now())`;
	}

	async update(id, video) {
		const { title, description, duration } = video;
		await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
	}

	async delete(id) {
		await sql`delete from videos where id = ${id}`;
	}
}
