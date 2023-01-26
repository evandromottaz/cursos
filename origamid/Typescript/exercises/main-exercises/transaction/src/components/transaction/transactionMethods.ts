import { ITransaction } from "../../Interfaces.js";
import Table from "../Table.js";
import { isTransaction } from "./typeGuards.js";

export function getNewTransactions(transactions: unknown) {
	if (!transactions || !Array.isArray(transactions)) return null;

	return transactions.map((transaction) => {
		if (isTransaction(transaction)) {
			return {
				name: transaction["Nome"],
				email: transaction["Email"],
				status: transaction["Status"],
				paymentMethod: transaction["Forma de Pagamento"],
				valueBRL: transaction["Valor (R$)"],
				date: transaction["Data"],
				id: transaction["ID"],
				newClient: transaction["Cliente Novo"],
			};
		}

		return null;
	});
}

export function getTransactionHead(transactions: unknown) {
	const { thead } = Table();
	if (!transactions || !Array.isArray(transactions)) return thead;

	const frag = new DocumentFragment();
	const firstTransaction = transactions[0];

	if (isTransaction(firstTransaction)) {
		const [status, id, date, name, paymentMethod, email, valueBRL, newClient] =
			Object.keys(firstTransaction);

		const ths = [name, email, date, valueBRL, paymentMethod, status];

		ths.forEach((colName) => {
			const { th } = Table();
			th.innerText = colName;
			frag.appendChild(th);
		});
	}

	thead.appendChild(frag);
	return thead;
}

export function getTransactionBody(
	transactions: ITransaction[],
	columns: NodeListOf<HTMLTableCellElement> | undefined
) {
	const { tbody } = Table();
	const trs = transactions.map((transaction) => {
		const frag = new DocumentFragment();
		const colsName = columns ? [...columns].map((col) => col.innerText) : [];

		colsName.forEach(() => {
			const { td } = Table();
			frag.appendChild(td);
		});

		Object.entries(transaction).forEach(([key, value]) => {
			const colIndex = colsName.indexOf(key);
			const hasCol = colIndex > -1;
			if (hasCol) frag.querySelectorAll("td")[colIndex].innerText = value;
		});

		const { tr } = Table();
		tr.append(frag);
		return tr;
	});

	tbody.append(...trs);
	return tbody;
}
