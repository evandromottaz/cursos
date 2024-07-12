package application;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> courseA = new ArrayList<>();
        List<Integer> courseB = new ArrayList<>();
        List<Integer> courseC = new ArrayList<>();

        Set<Integer> totalStudents = new HashSet<>();

        Scanner sc = new Scanner(System.in);

        System.out.print("Quantos estudantes tem o curso A? ");
        int nA = sc.nextInt();

        for (int i = 0; i < nA; i++) {
            courseA.add(sc.nextInt());
        }

        System.out.print("Quantos estudantes tem o curso B? ");
        int nB = sc.nextInt();

        for (int i = 0; i < nB; i++) {
            courseB.add(sc.nextInt());
        }

        System.out.print("Quantos estudantes tem o curso C? ");
        int nC = sc.nextInt();

        for (int i = 0; i < nC; i++) {
            courseC.add(sc.nextInt());
        }

        totalStudents.addAll(courseA);
        totalStudents.addAll(courseB);
        totalStudents.addAll(courseC);

        System.out.println("Número total de estudantes " + totalStudents.size());
        
        sc.close();
    }
}