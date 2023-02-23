import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";

declare global {
	type PaymentMethod = "Cartão de Crédito" | "Boleto";
	type TransactionStats =
		| "Paga"
		| "Recusada pela operadora de cartão"
		| "Aguardando pagamento"
		| "Estornada";

	interface ITransactionAPI {
		Status: TransactionStats;
		ID: number;
		Data: string;
		Nome: string;
		["Forma de Pagamento"]: PaymentMethod;
		Email: string;
		["Valor (R$)"]: string;
		["Cliente Novo"]: number;
	}

	interface ITransaction {
		status: TransactionStats;
		id: number;
		date: Date;
		name: string;
		paymentMethod: PaymentMethod;
		email: string;
		currency: string;
		newClient: boolean;
		amount: number | null;
	}
}

export default function transactionTransform(
	transaction: ITransactionAPI
): ITransaction {
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
