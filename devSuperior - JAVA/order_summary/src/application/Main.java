package application;

import entities.Client;
import entities.Order;
import entities.OrderItem;
import entities.Product;
import entities.enums.OrderStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter client data");

        System.out.print("Name: ");
        String name = sc.nextLine();

        System.out.print("Email: ");
        String email = sc.next();

        System.out.print("Birth date (DD/MM/YYYY): ");
        String birthDate = sc.next();

        System.out.println("Enter order data:");
        System.out.print("Status: ");
        OrderStatus status = OrderStatus.valueOf(sc.next());

        System.out.print("\nHow many items to this order? ");
        int ordersNumber = sc.nextInt();

        DateTimeFormatter pattern = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        Client client = new Client(name, email, LocalDate.parse(birthDate, pattern));

        Order order = new Order(LocalDateTime.now(), status);
        order.setClient(client);

        for (int i = 1; i <= ordersNumber; i++) {
            System.out.print("Enter #" + i + " item data: ");

            sc.nextLine();
            System.out.print("\nProduct name: ");
            String productName = sc.nextLine();

            System.out.print("Product price: ");
            Double productPrice = sc.nextDouble();

            Product product = new Product(productName, productPrice);

            System.out.print("Quantity: ");
            Integer productQuantity = sc.nextInt();

            OrderItem orderItem = new OrderItem(productQuantity, product.getPrice());
            orderItem.setProduct(product);

            order.addItem(orderItem);
        }

        System.out.println(order);

        sc.close();
    }
}
