import Counter from "./components/counter/Counter.js";
import Statistic from "./components/statistic/Statistic.js";
import Transaction from "./components/transaction/Transaction.js";
import getTransaction from "./services/getTransaction.js";
const app = document.querySelector(".app");
async function handleTransaction() {
    const transactions = await getTransaction();
    Template(transactions);
}
function Template(transactions = []) {
    const counter = Counter(transactions);
    const statistics = Statistic(counter);
    const transaction = Transaction(transactions);
    app?.append(statistics, transaction);
}
handleTransaction();
//# sourceMappingURL=script.js.map