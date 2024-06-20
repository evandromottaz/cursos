package application;

import entities.Student;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Student student = new Student();
        System.out.println("Digite o nome do aluno: ");
        student.name = sc.nextLine();

        System.out.println("Digite a nota do primeiro semestre: ");
        student.firstQuarter = sc.nextDouble();

        System.out.println("Digite a nota do segundo semestre: ");
        student.secondQuarter = sc.nextDouble();

        System.out.println("Digite a nota do terceiro semestre: ");
        student.thirdQuarter = sc.nextDouble();

        student.getMessage();

        sc.close();
    }
}