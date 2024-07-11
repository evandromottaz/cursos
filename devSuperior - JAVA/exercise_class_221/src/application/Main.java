package application;

import entities.Product;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        File path = new File("c:\\temp\\exercise221.csv");

        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String line = br.readLine();
            List<Product> products = new ArrayList<>();

            while (line != null) {
                String[] lineProduct = line.split(",");

                String name = lineProduct[0];
                Double price = Double.valueOf(lineProduct[1]);
                Integer quantity = Integer.valueOf(lineProduct[2]);

                Product product = new Product(name, quantity, price);
                products.add(product);

                line = br.readLine();
            }

            String outStr = path.getParent() + "\\out";

            boolean success = new File(outStr).mkdir();
            System.out.println(success ? "Pasta 'out' criada." : "A pasta 'out' já existe.");

            File summaryPath = new File(outStr + "\\summary.csv");

            try (BufferedWriter bw = new BufferedWriter(new FileWriter(summaryPath))) {
                for (Product product : products) {
                    bw.write(product.toString());
                    bw.newLine();
                }
            }

            System.out.println("Arquivo criado com sucesso!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}