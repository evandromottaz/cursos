package entities;

public class Product {
    private String name;
    private Double price;

    public Product() {
    }

    public Product(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    public String priceTag() {
        return name + " $ " + String.format("%.2f", price);
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }
}
