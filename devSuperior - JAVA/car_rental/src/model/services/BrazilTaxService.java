package model.services;

public class BrazilTaxService implements TaxService {

    public double tax(double amount) {
        if (amount > 100) {
            return amount * 0.15;
        }

        return amount * 0.2;
    }
}
