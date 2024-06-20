package application;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Quantos numeros voce vai digitar?");
        int n = sc.nextInt();

        int[] arr = new int[n];

        for(int i=0; i < arr.length; i++) {
            System.out.print("Digite um numero: ");
            arr[i] = sc.nextInt();
        }

        System.out.println("NUMEROS NEGATIVOS:");

        for(int i=0;i<arr.length;i++) {
            if (arr[i] < 0) {
                System.out.println(arr[i]);
            }
        }

        sc.close();
    }
}