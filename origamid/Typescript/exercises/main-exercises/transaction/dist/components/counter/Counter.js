import { setValueBRL, setPaymentMethod, setStatus, setSalesPerDays, setDayMostSale, } from "./counterMethods.js";
export const counterData = {
    valueBRL: 0,
    paymentMethod: {
        bankSlip: 0,
        creditCard: 0,
    },
    status: {
        paid: 0,
        refused: 0,
        awaitingPayment: 0,
        reversed: 0,
    },
    salesPerDays: {
        sunday: 0,
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
    },
    dayMostSale: "",
};
const Counter = (transactions) => {
    transactions.forEach((transaction) => {
        setValueBRL(transaction["Valor (R$)"]);
        setPaymentMethod(transaction["Forma de Pagamento"]);
        setStatus(transaction["Status"]);
        setSalesPerDays(transaction["Data"]);
    });
    setDayMostSale(counterData.salesPerDays);
    return counterData;
};
export default Counter;
//# sourceMappingURL=Counter.js.map