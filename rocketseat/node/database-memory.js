import { randomUUID } from "node:crypto";
export class DatabaseMemory {
	#videos = new Map();

	list(search = "") {
		return [...this.#videos]
			.map(([id, video]) => ({ id, ...video }))
			.filter((video) => {
				const videoTitle = video.title.toLowerCase();
				const searchParam = search.toLowerCase();
				return videoTitle.includes(searchParam);
			});
	}

	create(video) {
		const videoId = randomUUID();
		this.#videos.set(videoId, video);
	}

	update(id, video) {
		this.#videos.set(id, video);
	}

	delete(id) {
		this.#videos.delete(id);
	}
}
