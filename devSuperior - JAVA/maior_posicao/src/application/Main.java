package application;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.print("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        float[] numbers = new float[n];
        float highNumber = 0;
        int position = 0;

        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Digite um numero: ");
            float number = sc.nextFloat();

            if (number > highNumber) {
                highNumber = number;
                position = i;
            }
        }

        System.out.println("MAIOR VALOR = " + highNumber);
        System.out.println("POSICAO DO MAIOR VALOR = " + position);

        sc.close();
    }
}