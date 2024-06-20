package application;

import util.CurrencyConverter;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.print("What is dollar price? ");
        double dollarPrice = sc.nextDouble();

        System.out.print("How many dollars will be brought? ");
        double dollars = sc.nextDouble();

        double price = CurrencyConverter.convert(dollars,dollarPrice);

        System.out.printf("Amount to be paid in reais = %.2f", price);

        sc.close();
    }
}