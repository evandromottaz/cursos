package application;

import entities.Department;
import entities.HourContract;
import entities.Worker;
import entities.enums.WorkerLevel;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o nome do departamento: ");
        String departmentName = sc.nextLine();
        Department department = new Department(departmentName);

        System.out.println("Digite os dados do trabalhador");
        System.out.print("Nome: ");
        String workerName = sc.nextLine();

        System.out.print("Nível: ");
        WorkerLevel workerLevel = WorkerLevel.valueOf(sc.next());

        System.out.print("Salário base: ");
        Double workerBaseSalary = sc.nextDouble();

        Worker worker = new Worker(workerName, workerLevel, workerBaseSalary);
        worker.setDepartment(department);

        System.out.println("Quantos contratos este trabalhor terá?");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.print("\nDigite os dados do #" + i + " contrato:");
            System.out.print("\nData (DD/MM/YYYY): ");
            String date = sc.next();

            System.out.print("Valor por hora: ");
            Double valuePerHour = sc.nextDouble();

            System.out.print("Duração (horas): ");
            Integer hours = sc.nextInt();

            HourContract contract = new HourContract(date, valuePerHour, hours);
            worker.addContract(contract);
        }

        System.out.println("\nDigite o mês e ano para calcular o total ganho (MM/YYYY): ");
        String monthAndYear = sc.next();
        Integer month = Integer.valueOf(monthAndYear.substring(0, 2));
        Integer year = Integer.valueOf(monthAndYear.substring(3));

        System.out.print("Nome: " + worker.getName());
        System.out.print("\nDepartamento: " + worker.getDepartment().getName());
        System.out.print("\nTotal ganho: " + worker.income(month, year));
    }
}
