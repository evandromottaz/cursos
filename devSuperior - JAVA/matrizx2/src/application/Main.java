package application;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m, n;
        m = sc.nextInt();
        n = sc.nextInt();

        int[][] mat = new int[m][n];

        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                mat[i][j] = sc.nextInt();
            }
        }

        int position = sc.nextInt();

        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                boolean isPosition = mat[i][j] == position;

                if (isPosition) {
                    System.out.print("\nPosition " + i + ", " + j);
                }

                if (isPosition && j - 1 > -1 && mat[i][j - 1] != -1) {
                    System.out.print("\nLeft: " + mat[i][j - 1]);
                }

                if (isPosition && j + 1 < mat[i].length && mat[i][j + 1] != -1) {
                    System.out.print("\nRight: " + mat[i][j + 1]);
                }

                if (isPosition && i - 1 > -1 && mat[i - 1][j] != -1) {
                    System.out.print("\nUp: " + mat[i - 1][j]);
                }

                if (isPosition && i + 1 < mat.length && mat[i + 1][j] != -1) {
                    System.out.print("\nDown: " + mat[i + 1][j]);
                }
            }
        }
    }
}
