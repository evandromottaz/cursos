type Profile = {
	name: string;
	id: number;
}

export async function Git(url:string) {
  	const response = await fetch(url);
	const data = await response.json() as Profile
	return data
}