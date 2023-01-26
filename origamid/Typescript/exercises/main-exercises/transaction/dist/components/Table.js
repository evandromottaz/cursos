import createElement from "../utils/createElement.js";
const Table = () => {
    const table = createElement("table", "table");
    const thead = createElement("thead", "table__thead");
    const th = createElement("th", "table__th");
    const tbody = createElement("tbody", "table__tbody");
    const tr = createElement("tr", "table__tr");
    const td = createElement("td", "table__td");
    return { table, thead, th, tbody, tr, td };
};
export default Table;
//# sourceMappingURL=Table.js.map