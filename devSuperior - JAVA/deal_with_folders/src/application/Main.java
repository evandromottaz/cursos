package application;

import java.io.File;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o caminho de uma pasta");
        String strPath = sc.nextLine();

        File path = new File(strPath);

        File[] folders = path.listFiles(File::isDirectory);
        System.out.println("PASTAS");
        for (File folder : folders) {
            System.out.println(folder);
        }

        File[] files = path.listFiles(File::isFile);
        System.out.println("Arquivos");
        for (File file : files) {
            System.out.println(file);
        }

        boolean success = new File(strPath + "\\pasta_criada").mkdir();
        System.out.println("Pasta criada com sucesso: " + success);

        System.out.println("Mostrando informações do arquivo test.txt");

        String strTest = "c:/temp/test.txt";
        File testPath = new File(strTest);
        System.out.println("Nome: " + testPath.getName());
        System.out.println("Pasta: " + testPath.getParent());
        System.out.println("Todo Caminho: " + testPath.getPath());

        sc.close();
    }
}