import countBy from "../utils/countBy.js";

type ITransactionValue = ITransaction & { amount: number };

export default class Statistics {
	private transactions;
	total;
	payment;
	stats;

	constructor(transactions: ITransaction[]) {
		this.transactions = transactions;
		this.total = this.setTotalAmount();
		this.payment = this.setPayment();
		this.stats = this.setStats();
	}

	private setTotalAmount() {
		return this.transactions
			.filter(this.typeGuardAmount)
			.reduce((acc, item) => acc + item.amount, 0);
	}

	private setPayment() {
		return countBy(this.transactions.map(({ paymentMethod }) => paymentMethod));
	}

	private setStats() {
		return countBy(this.transactions.map(({ status }) => status));
	}

	private typeGuardAmount(
		transaction: ITransaction
	): transaction is ITransactionValue {
		return transaction.amount !== null;
	}
}
