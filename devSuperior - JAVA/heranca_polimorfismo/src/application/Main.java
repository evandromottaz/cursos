package application;

import entities.LegalEntity;
import entities.PrivateIndividual;
import entities.TaxPayer;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        List<TaxPayer> taxPayers = new ArrayList<>();

        System.out.print("Enter the number of tax payers: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.print("Tax payer #" + i + " data:\n");
            System.out.print("Individual or company (i/c)? ");
            char choice = sc.next().charAt(0);
            sc.nextLine();

            if (choice == 'i') {
                System.out.print("Name: ");
                String name = sc.nextLine();
                System.out.print("Annual income: ");
                Double annualIncome = sc.nextDouble();
                System.out.print("Health expenditures: ");
                Double healthSpending = sc.nextDouble();
                taxPayers.add(new PrivateIndividual(name, annualIncome, healthSpending));
            }

            if (choice == 'c') {
                System.out.print("Name: ");
                String name = sc.nextLine();
                System.out.print("Annual income: ");
                Double annualIncome = sc.nextDouble();
                System.out.print("Number of employees: ");
                int employeeNumber = sc.nextInt();
                taxPayers.add(new LegalEntity(name, annualIncome, employeeNumber));
            }
        }

        System.out.println("\nTAXES PAID:");

        Double totalTax = 0.0;
        for (TaxPayer taxPayer : taxPayers) {
            System.out.print(taxPayer.toString());
            totalTax += taxPayer.totalTax();
        }

        System.out.printf("\n\nTOTAL TAXES: $ %.2f", totalTax);

        sc.close();
    }
}
