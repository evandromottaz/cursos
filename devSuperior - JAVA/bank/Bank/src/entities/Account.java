package entities;

public class Account {
    private String name;
    private int number;
    private double amount;

    public Account(int number, String name, double initialAmount) {
        this.number = number;
        this.name = name;
        deposit(initialAmount);
    }

    public Account(String name, int number) {
        this.name = name;
        this.number = number;
    }

    public Account(String name, int number, double amount) {
        this.name = name;
        this.number = number;
        this.amount = amount;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void deposit(double amount) {
        this.amount += amount;
    }

    public void withdrawal(double amount) {
        this.amount = this.amount - amount - 5;
    }

    @Override
    public String toString() {
        return "Account " + number
                + ", Holder: " + name
                + ", Balance: " + String.format("%.2f", amount);
    }
}
