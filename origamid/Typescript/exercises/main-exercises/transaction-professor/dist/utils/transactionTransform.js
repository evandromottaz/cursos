import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";
export default function transactionTransform(transaction) {
    return {
        status: transaction.Status,
        id: transaction.ID,
        date: stringToDate(transaction.Data),
        name: transaction.Nome,
        paymentMethod: transaction["Forma de Pagamento"],
        email: transaction.Email,
        currency: transaction["Valor (R$)"],
        newClient: Boolean(transaction["Cliente Novo"]),
        amount: currencyToNumber(transaction["Valor (R$)"]),
    };
}
//# sourceMappingURL=transactionTransform.js.map