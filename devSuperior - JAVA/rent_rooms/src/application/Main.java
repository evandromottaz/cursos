package application;

import entities.Room;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.print("How many rooms will be rented? ");
        int n = sc.nextInt();

        Room[] rooms = new Room[10];

        for (int i = 0; i < n; i++) {
            System.out.print("\nRent #" + (i + 1));

            System.out.print("\nName: ");
            sc.nextLine();
            String name = sc.nextLine();

            System.out.print("Email: ");
            String email = sc.nextLine();

            System.out.print("Room: ");
            int room = sc.nextInt();

            rooms[room] = new Room(name, email, room);
        }

        System.out.println("\nBusy rooms:");

        for (int i = 0; i < rooms.length; i++) {

            if (rooms[i] != null) {

                System.out.println(rooms[i]);
            }
        }
    }
}