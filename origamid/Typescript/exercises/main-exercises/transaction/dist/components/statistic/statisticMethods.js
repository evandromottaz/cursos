import Table from "../Table.js";
function statisticNode(title, valuesArr) {
    const { th } = Table();
    const frag = new DocumentFragment();
    th.innerText = title;
    const tds = valuesArr.map((values) => {
        if (typeof values === "object") {
            const { table, tbody } = Table();
            frag.appendChild(table);
            Object.entries(values).forEach(([key, value]) => {
                const tdCol = Table().td;
                const tdValue = Table().td;
                tbody.append(tdCol, tdValue);
                tdCol.innerText = key;
                tdValue.innerText = String(value);
            });
            table.appendChild(tbody);
            return table;
        }
        const { td } = Table();
        td.innerText = values;
        frag.appendChild(td);
        return td;
    });
    frag.append(...tds);
    return { th, frag };
}
export function getTotalBRL(amount) {
    const moneyConfig = { currency: "BRL", style: "currency" };
    const amountConverted = amount.toLocaleString("pt-BR", moneyConfig);
    return statisticNode("Valor total", [amountConverted]);
}
export function getDayMostSale(day) {
    return statisticNode("Dia da semana mais vendido", [day]);
}
export function getPaymentMethods(methods) {
    const methodsPTBR = {
        Boleto: methods.bankSlip,
        "Cartão de Crédito": methods.creditCard,
    };
    return statisticNode("Métodos de pagamento", [methodsPTBR]);
}
//# sourceMappingURL=statisticMethods.js.map