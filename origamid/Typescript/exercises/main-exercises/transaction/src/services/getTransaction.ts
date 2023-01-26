async function getTransaction() {
	try {
		const response = await fetch(
			"https://api.origamid.dev/json/transacoes.json"
		);
		return await response.json();
	} catch (e) {
		console.log(e);
	}
}

export default getTransaction;
