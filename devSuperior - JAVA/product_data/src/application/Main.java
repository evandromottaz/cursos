package application;

import entities.ImportedProduct;
import entities.Product;
import entities.UsedProduct;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of products: ");
        int n = sc.nextInt();
        List<Product> products = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
            System.out.print("Product #" + i + " data:");
            System.out.print("\nCommon, used or imported (c/u/i)? ");
            char choice = sc.next().charAt(0);
            sc.nextLine();

            Product product = new Product();

            if (choice == 'c') {
                System.out.print("Name: ");
                String name = sc.nextLine();

                System.out.print("Price: ");
                Double price = sc.nextDouble();

                product = new Product(name, price);
            }

            if (choice == 'u') {
                System.out.print("Name: ");
                String name = sc.nextLine();

                System.out.print("Price: ");
                Double price = sc.nextDouble();

                System.out.print("Manufacture date (DD/MM/YYYY): ");
                String date = sc.next();

                product = new UsedProduct(name, price, LocalDate.parse(date,
                        DateTimeFormatter.ofPattern("dd/MM/yyyy")));
            }

            if (choice == 'i') {
                System.out.print("Name: ");
                String name = sc.nextLine();

                System.out.print("Price: ");
                Double price = sc.nextDouble();

                System.out.print("Customs fee: ");
                Double customFee = sc.nextDouble();

                product = new ImportedProduct(name, price, customFee);
            }

            products.add(product);
        }

        System.out.println("\nPRICE TAGS:");
        for (Product product : products) {
            System.out.println(product.priceTag());
        }

        sc.close();
    }
}
