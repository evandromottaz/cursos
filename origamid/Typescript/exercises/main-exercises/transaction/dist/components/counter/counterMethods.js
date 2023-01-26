import { counterData } from "./Counter.js";
export function setValueBRL(valueBRL) {
    const cleanNumberValue = +valueBRL.replace(/[,\.]/, "");
    const amount = isNaN(cleanNumberValue) ? 0 : cleanNumberValue / 100;
    counterData.valueBRL += amount;
}
export function setPaymentMethod(method) {
    const { paymentMethod } = counterData;
    if (method === "Cartão de Crédito") {
        paymentMethod.creditCard += 1;
        return;
    }
    paymentMethod.bankSlip += 1;
}
export function setStatus(status) {
    const counterStatus = counterData.status;
    switch (status) {
        case "Paga":
            return (counterStatus.paid += 1);
        case "Aguardando pagamento":
            return (counterStatus.awaitingPayment += 1);
        case "Estornada":
            return (counterStatus.reversed += 1);
        case "Recusada pela operadora de cartão":
            return (counterStatus.refused += 1);
        default:
            throw Error("status not valid!");
    }
}
export function setSalesPerDays(date) {
    const splitDate = date.split(" ");
    const formatDate = splitDate[0].split("/").reverse().join("-");
    const dayNumber = new Date(`${formatDate} ${splitDate[1]}`).getDay();
    const { salesPerDays } = counterData;
    switch (dayNumber) {
        case 0:
            return (salesPerDays.sunday += 1);
        case 1:
            return (salesPerDays.monday += 1);
        case 2:
            return (salesPerDays.tuesday += 1);
        case 3:
            return (salesPerDays.wednesday += 1);
        case 4:
            return (salesPerDays.thursday += 1);
        case 5:
            return (salesPerDays.friday += 1);
        default:
            return (salesPerDays.saturday += 1);
    }
}
export function setDayMostSale(salesPerDays) {
    const [firstSale] = Object.entries(salesPerDays).sort((a, b) => b[1] - a[1]);
    const portugueseDay = {
        sunday: "Domingo",
        monday: "Segunda-feira",
        tuesday: "Terça-feira",
        wednesday: "Quarta-feira",
        thursday: "Quinta-feira",
        friday: "Sexta-feira",
        saturday: "Sábado",
    };
    const [day] = firstSale;
    if (portugueseDay[day])
        counterData.dayMostSale = portugueseDay[day];
}
//# sourceMappingURL=counterMethods.js.map