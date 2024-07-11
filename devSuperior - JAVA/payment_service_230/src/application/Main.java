package application;

import model.entities.Contract;
import model.entities.Installment;
import model.services.ContractService;
import model.services.PaypalService;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.println("Entre os dados do contrato:");

        System.out.print("Numero: ");
        int number = sc.nextInt();

        System.out.print("Data (dd/MM/yyyy): ");
        String date = sc.next();

        System.out.print("Valor do contrato: ");
        double totalValue = sc.nextDouble();

        System.out.print("Entre com o numero de parcelas: ");
        int months = sc.nextInt();

        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        Contract contract = new Contract(number, LocalDate.parse(date, fmt), totalValue);
        ContractService contractService = new ContractService();
        contractService.setPaymentService(new PaypalService());

        contractService.processContract(contract, months);

        System.out.println("Parcelas:");

        for (Installment installment : contract.getInstallment()) {
            System.out.println(fmt.format(installment.getDueDate()) + " - " + String.format("%.2f", installment.getAmount()));
        }

        System.out.println("\nTu vai pagar caro!!" + contract.getTotalAmount());

        sc.close();
    }
}