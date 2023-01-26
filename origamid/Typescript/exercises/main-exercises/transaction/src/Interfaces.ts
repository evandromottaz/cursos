import { SalesPerDays } from "./components/counter/typing";

export interface ICounter {
	valueBRL: number;
	paymentMethod: {
		bankSlip: number;
		creditCard: number;
	};
	status: {
		paid: number;
		refused: number;
		awaitingPayment: number;
		reversed: number;
	};
	salesPerDays: SalesPerDays;
	dayMostSale: string;
}

export interface ITransaction {
	"Cliente Novo": number;
	Data: string;
	Email: string;
	"Forma de Pagamento": "Cartão de Crédito" | "Boleto";
	ID: number;
	Nome: string;
	Status:
		| "Paga"
		| "Recusada pela operadora de cartão"
		| "Aguardando pagamento"
		| "Estornada";
	"Valor (R$)": string;
}
