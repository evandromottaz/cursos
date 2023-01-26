import createElement from "../../utils/createElement.js";
import Table from "../Table.js";
import { getDayMostSale, getPaymentMethods, getTotalBRL, } from "./statisticMethods.js";
const Statistic = (counter) => {
    const { table, thead, tbody } = Table();
    const section = createElement("section", "statistic");
    const valueBRL = getTotalBRL(counter.valueBRL);
    const mostSale = getDayMostSale(counter.dayMostSale);
    const paymentMethods = getPaymentMethods(counter.paymentMethod);
    thead.append(valueBRL.th, mostSale.th, paymentMethods.th);
    tbody.append(valueBRL.frag, mostSale.frag, paymentMethods.frag);
    table.append(thead, tbody);
    section.append(table);
    return section;
};
export default Statistic;
//# sourceMappingURL=Statistic.js.map