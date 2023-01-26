import { ITransaction } from "../../Interfaces";

export function isTransaction(data: unknown): data is ITransaction {
	if (data && typeof data === "object")
		return (
			"Cliente Novo" in data &&
			"Data" in data &&
			"Email" in data &&
			"Forma de Pagamento" in data &&
			"ID" in data &&
			"Nome" in data &&
			"Status" in data &&
			"Valor (R$)" in data
		);

	return false;
}
