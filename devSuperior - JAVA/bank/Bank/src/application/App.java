package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Account;

public class App {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);

        Account account;

        Scanner input = new Scanner(System.in);

        System.out.println("Enter account number: ");
        int accountNumber = input.nextInt();
        input.nextLine();

        System.out.println("\nEnter account holder: ");
        String accountName = input.nextLine();

        System.out.println("Is there an initial deposit? (y/n)? ");
        char userResponse = input.next().charAt(0);

        if (userResponse == 'y') {
            System.out.print("Enter initial deposit value: ");
            double initialAmount = input.nextDouble();
            account = new Account(accountName, accountNumber, initialAmount);
        } else {
            account = new Account(accountName, accountNumber);
        }

        System.out.println("Account data: ");
        System.out.println(account);

        System.out.println("Enter a deposit value: ");
        account.deposit(input.nextDouble());
        System.out.println(account);

        System.out.println("Enter a withdraw value: ");
        account.withdrawal(input.nextDouble());
        System.out.println("Updated account data: ");
        System.out.println(account);

        input.close();
    }
}
