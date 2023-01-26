import createElement from "../../utils/createElement.js";
import Table from "../Table.js";
import { getTransactionHead, getTransactionBody, } from "./transactionMethods.js";
const Transaction = (transactions = []) => {
    const { table } = Table();
    const section = createElement("section", "transaction");
    const transactionHead = getTransactionHead(transactions);
    const columns = transactionHead?.querySelectorAll("th");
    const transactionBody = getTransactionBody(transactions, columns);
    table.append(transactionHead, transactionBody);
    section.classList.add("transaction");
    section.appendChild(table);
    return section;
};
export default Transaction;
//# sourceMappingURL=Transaction.js.map