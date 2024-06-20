package application;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Scanner sc = new Scanner(System.in);
        System.out.print("Quantos numeros voce vai digitar? ");
        int n = sc.nextInt();

        double[] nArr = new double[n];
        String nStr = "";
        double sum = 0;

        for (int i = 0; i < nArr.length; i++) {
            System.out.print("Digite um numero: ");
            nArr[i] = sc.nextDouble();

        }

        for (int i = 0; i < nArr.length; i++) {
            nStr += nArr[i] + " ";
            sum += nArr[i];
        }

        System.out.println();
        System.out.print("VALORES = " + nStr);
        System.out.println();
        System.out.printf("SOMA = %.2f%n", sum);
        System.out.printf("MEDIA = %.2f%n", sum / n);

        sc.close();

    }
}