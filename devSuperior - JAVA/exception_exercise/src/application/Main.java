package application;

import model.entities.Account;
import model.exceptions.AccountException;

public class Main {
    public static void main(String[] args) {
        try {
            Account account = new Account(8021, "Bob Brown", 0.00, 300.00);
            account.withdraw(250.0);
        } catch (AccountException error) {
            System.out.println(error.getMessage());
        } catch (RuntimeException error) {
            System.out.println("Desculpe, um erro inesperado ocorreu :(\nCódigo: " + error.getMessage());
        }
    }
}
