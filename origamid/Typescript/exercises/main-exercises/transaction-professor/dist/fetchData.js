export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw Error("Error: " + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) { }
}
//# sourceMappingURL=fetchData.js.map