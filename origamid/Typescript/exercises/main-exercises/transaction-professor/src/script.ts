import Statistics from "./class/Statistics.js";
import fetchData from "./services/fetchData.js";
import transactionTransform from "./utils/transactionTransform.js";

async function handleData() {
	const URL = "https://api.origamid.dev/json/transacoes.json";
	const data = await fetchData<ITransactionAPI[]>(URL);
	if (!data) return;

	const transactions = data.map(transactionTransform);
	setTable(transactions);
	setStatistics(transactions);
}

function setStatistics(transactions: ITransaction[]) {
	const statistics = new Statistics(transactions);

	const paymentElement = document.querySelector<HTMLElement>("[data-payment]");
	if (paymentElement) {
		Object.entries(statistics.payment).forEach(([method, number]) => {
			console.log(number);
			paymentElement.innerText += `<p>${method}: ${number}</p>`;
		});
	}

	const totalElement = document.querySelector<HTMLElement>("[data-total]");
	if (totalElement) {
		totalElement.innerText = statistics.total.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		});
	}
}

function setTable(transactions: ITransaction[]) {
	const table = document.querySelector("[data-transaction]");
	if (!table) return;

	transactions.forEach((transaction) => {
		table.innerHTML += `
			<tr>
				<td>${transaction.name}</td>
				<td>${transaction.email}</td>
				<td>R$ ${transaction.currency}</td>
				<td>${transaction.paymentMethod}</td>
				<td>${transaction.status}</td>
			</tr>
		`;
	});
}

handleData();
