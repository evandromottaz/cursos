package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Employee;

public class App {
    public static void main(String[] args) throws Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        Employee employee = new Employee();


        System.out.println("Name: ");

        employee.name = sc.nextLine();
        System.out.println("\nGross salary: ");
        employee.grossSalary = sc.nextDouble();

        System.out.println("\nTax: ");
        employee.tax = sc.nextDouble();

        System.out.println("\nEmployee: " + employee.name + ", $ " + String.format("%.2f", employee.netSalary()));

        System.out.println("\nWhich percentage to increase salary?");
        double increasePercentage = sc.nextDouble();
        employee.increaseSalary(increasePercentage);

        System.out.println("\nUpdated data: " + employee.name + ", $ " + String.format("%.2f", employee.netSalary()));

        sc.close();
    }
}
