import countBy from "../utils/countBy.js";
export default class Statistics {
    transactions;
    total;
    payment;
    stats;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotalAmount();
        this.payment = this.setPayment();
        this.stats = this.setStats();
    }
    setTotalAmount() {
        return this.transactions
            .filter(this.typeGuardAmount)
            .reduce((acc, item) => acc + item.amount, 0);
    }
    setPayment() {
        return countBy(this.transactions.map(({ paymentMethod }) => paymentMethod));
    }
    setStats() {
        return countBy(this.transactions.map(({ status }) => status));
    }
    typeGuardAmount(transaction) {
        return transaction.amount !== null;
    }
}
//# sourceMappingURL=Statistics.js.map