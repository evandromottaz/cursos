package entities;

public class Employee {
    private final int id;
    private final String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void increaseSalary(double percentage) {
        this.salary += salary * percentage / 100;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return id + ", " + name + ", " + salary;
    }
}
