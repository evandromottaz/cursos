export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw Error("Error: " + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error)
            console.error("fetchData: " + error.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map