package application;

import entities.Person;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Scanner sc = new Scanner(System.in);

        System.out.print("Quantas pessoas serao digitadas? ");
        int n = sc.nextInt();
        sc.nextLine();

        Person[] personList = new Person[n];

        int personN = 1;

        for (int i = 0; i < personList.length; i++) {
            System.out.println("Dados da " + personN + "a pessoa:");

            System.out.print("Nome: ");
            String name = sc.nextLine();


            System.out.print("Idade: ");
            int age = sc.nextInt();


            System.out.print("Altura: ");
            float height = sc.nextFloat();
            sc.nextLine();

            personList[i] = new Person(name, age, height);

            personN++;
        }

        float sumHeight = 0;
        int quantityPersonAgeLessThan16 = 0;

        for (int i = 0; i < personList.length; i++) {
            sumHeight += personList[i].getHeight();

            if (personList[i].getAge() < 16) {
                quantityPersonAgeLessThan16 += 1;
            }
        }

        System.out.print("Altura média: " + String.format("%.2f", sumHeight / n));
        System.out.println();
        System.out.print("Pessoas com menos de 16 anos: " + String.format("%.1f",
                (float) quantityPersonAgeLessThan16 / n * 100) + "%");
        System.out.println();

        for (int i = 0; i < personList.length; i++) {
            if (personList[i].getAge() < 16) {
                System.out.println(personList[i].getName());
            }
        }

        sc.close();

    }
}