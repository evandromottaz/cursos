package application;

import entities.Employee;
import entities.EmployeeList;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos colaboradores deseja registrar? ");
        int employeesNumber = sc.nextInt();

        EmployeeList employeeList = new EmployeeList();

        for (int i = 0; i < employeesNumber; i++) {
            System.out.println();
            System.out.printf("Colaborador #%d:\n", (i + 1));

            System.out.print("Id: ");
            int id = sc.nextInt();

            while (employeeList.has(id)) {
                System.out.print("Id já está sendo usado. Tente novamente: ");
                id = sc.nextInt();
            }
            sc.nextLine();

            System.out.print("Nome: ");
            String name = sc.nextLine();

            System.out.print("Salário: ");
            double salary = sc.nextDouble();

            employeeList.add(new Employee(id, name, salary));
        }

        System.out.print("Digite o id do colaborador que deseja dar um aumento: ");
        int employeeId = sc.nextInt();
        double percentage = 0;

        if (employeeList.has(employeeId)) {
            Employee employee = employeeList.find(employeeId);

            System.out.print("Digite a porcentagem: ");
            percentage = sc.nextDouble();

            employee.increaseSalary(percentage);
        } else {
            System.out.println("Colaborador não encontrado!");
            System.out.print("Deseja tentar novamente? (s/n) ");
            char userResponse = sc.next().charAt(0);

            while (userResponse == 's') {
                System.out.print("Digite o id do colaborador que deseja dar um aumento: ");
                employeeId = sc.nextInt();

                if (employeeList.has(employeeId)) {
                    userResponse = 'n';
                    System.out.print("Digite a porcentagem: ");
                    percentage = sc.nextDouble();
                    employeeList.find(employeeId).increaseSalary(percentage);
                }

                if (!employeeList.has(employeeId)) {
                    System.out.println("Colaborador não encontrado!");
                    System.out.print("Deseja tentar novamente? (s/n) ");
                    userResponse = sc.next().charAt(0);
                }
            }
        }

        System.out.println();

        System.out.println("List of employees:");

        for (Employee employee : employeeList.getList()) {
            System.out.println(employee);
        }
    }
}
