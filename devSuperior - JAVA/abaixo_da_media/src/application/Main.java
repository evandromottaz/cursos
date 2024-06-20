package application;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.print("Quantos elementos vai ter o vetor? ");
        int n = sc.nextInt();

        float[] numbers = new float[n];
        float sumNum = 0;

        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Digite um numero: ");
            float number = sc.nextFloat();
            numbers[i] = number;
            sumNum += number;
        }

        float average = sumNum / n;

        System.out.println();
        System.out.printf("MEDIA DO VETOR = %.3f\n", average);
        System.out.println("ELEMENTOS ABAIXO DA MEDIA:");

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] < average) {
                System.out.printf("%.1f\n", numbers[i]);
            }
        }

        sc.close();
    }
}