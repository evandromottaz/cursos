package application;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        int[] numbers = new int[n];
        String concat = "";
        int sumPair = 0;

        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Digite um numero: ");
            int number = sc.nextInt();

            if (number % 2 == 0) {
                concat += number + " ";
                sumPair++;
            }

            System.out.println();
        }

        System.out.println("NUMEROS PARES: ");
        System.out.println(concat);
        System.out.println();
        System.out.print("QUANTIDADE DE PARES = " + sumPair);

        sc.close();
    }
}