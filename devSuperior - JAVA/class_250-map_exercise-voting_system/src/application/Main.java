package application;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> candidates = new LinkedHashMap<>();

        File path = new File("c:/temp/registros_votacao.csv");

        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {

            String line = reader.readLine();

            while (line != null) {
                String[] fields = line.split(",");
                String name = fields[0];
                Integer votes = Integer.parseInt(fields[1]);

                if (candidates.containsKey(name)) {
                    candidates.put(name, candidates.get(name) + votes);
                } else {
                    candidates.put(name, votes);
                }

                line = reader.readLine();
            }
        } catch (IOException e) {
            System.out.println(e.getStackTrace());
        }

        if (candidates.isEmpty()) {
            throw new IllegalStateException("O arquivo está vazio.");
        }

        for (String candidate : candidates.keySet()) {
            System.out.println(candidate + ": " + candidates.get(candidate));
        }
    }
}