package entities;

public class ImportedProduct extends Product {
    private final Double customsFree;

    public ImportedProduct(String name, Double price, Double customsFree) {
        super(name, price);
        this.customsFree = customsFree;
    }

    public Double totalPrice() {
        return getPrice() + customsFree;
    }

    @Override
    public String priceTag() {
        return getName() + " $ " + String.format("%.2f", totalPrice()) + " (Customs fee: $" +
                " " + String.format("%.2f", customsFree) + ")";
    }
}
