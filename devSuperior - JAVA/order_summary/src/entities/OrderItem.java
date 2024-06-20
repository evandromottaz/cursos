package entities;

public class OrderItem {
    private final Integer quantity;
    private final Double price;
    private Product product;

    public OrderItem(Integer quantity, Double price) {
        this.quantity = quantity;
        this.price = price;
    }

    public Double subTotal() {
        return quantity * price;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return product.getName() +
                ", $" +
                String.format("%.2f", product.getPrice()) +
                ", Quantity" +
                ": " +
                quantity +
                ", " +
                "Subtotal: $" +
                String.format("%.2f", this.subTotal()) +
                "\n";
    }
}
