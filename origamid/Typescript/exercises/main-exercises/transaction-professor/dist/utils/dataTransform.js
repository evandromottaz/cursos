export function dataTransform(transaction) {
    return {
        status: transaction.Status,
        id: transaction.ID,
        date: transaction.Data,
        name: transaction.Nome,
        paymentMethod: transaction["Forma de Pagamento"],
        email: transaction.Email,
        coin: transaction["Valor (R$)"],
        newClient: Boolean(transaction["Cliente Novo"]),
        amount: 0,
    };
}
//# sourceMappingURL=dataTransform.js.map