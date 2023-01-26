export type PaymentMethod = "Cartão de Crédito" | "Boleto";

export type Status =
	| "Paga"
	| "Aguardando pagamento"
	| "Estornada"
	| "Recusada pela operadora de cartão";

export type SalesPerDays = {
	monday: number;
	tuesday: number;
	wednesday: number;
	thursday: number;
	friday: number;
	saturday: number;
	sunday: number;
};

export type PortugueseDay = { [key: string]: string };
