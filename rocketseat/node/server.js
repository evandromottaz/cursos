import { DatabaseMemory } from "./database-memory.js";
import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();
const db = new DatabasePostgres();

server.post("/videos", async (request, reply) => {
	const { title, description, duration } = request.body;

	await db.create({
		title,
		description,
		duration,
		created_at: new Date(),
	});

	return reply.status(201).send();
});

server.get("/videos", async (request) => {
	const { search } = request.query;
	const videos = await db.list(search);
	return videos;
});

server.put("/video/:id", async (request, reply) => {
	const videoId = request.params.id;
	const { title, description, duration } = request.body;
	await db.update(videoId, {
		title,
		description,
		duration,
	});

	return reply.status(204).send();
});

server.delete("/video/:id", async (request, reply) => {
	const videoId = request.params.id;
	await db.delete(videoId);
	return reply.status(204).send();
});

server.listen({
	port: process.env.PORT || 3333,
});
