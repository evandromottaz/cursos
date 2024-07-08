package entities;

public class Product {
    private final String name;
    private final Integer quantity;
    private final Double price;

    public Product(String name, Integer quantity, Double price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public Double getTotalPrice() {
        return price * quantity;
    }

    @Override
    public String toString() {
        return name + "," + getTotalPrice();
    }
}
