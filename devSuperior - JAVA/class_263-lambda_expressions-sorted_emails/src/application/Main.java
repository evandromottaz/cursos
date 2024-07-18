package application;

import entity.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        double salaryDigit = 2000.00;

        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("Maria", "maria@gmail.com", 3200.00));
        employees.add(new Employee("Alex", "alex@gmail.com", 1900.00));
        employees.add(new Employee("Marco", "marco@gmail.com", 1700.00));
        employees.add(new Employee("Bob", "bob@gmail.com", 3500.00));
        employees.add(new Employee("Anna", "anna@gmail.com", 2800.00));

        List emailsOfEmployeesSalaryHigherThan2000 = employees.stream()
                .filter(e -> e.getSalary() > salaryDigit)
                .map(e -> e.getEmail())
                .collect(Collectors.toList());

        double sumSalaryEmployeesWhoseNameStartM = employees.stream()
                .filter(e -> e.getName().charAt(0) == 'M')
                .map(e -> e.getSalary())
                .reduce(0.0, Double::sum);

        System.out.println("Email dos funcionarios que tem salário maior que 2000");
        emailsOfEmployeesSalaryHigherThan2000.forEach(System.out::println);

        System.out.print("Soma dos salários dos funcionários que começam com a letra 'M': " + sumSalaryEmployeesWhoseNameStartM);
    }
}