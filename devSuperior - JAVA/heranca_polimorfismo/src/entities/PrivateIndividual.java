package entities;

public class PrivateIndividual extends TaxPayer {
    private Double healthSpending;

    public PrivateIndividual(String name, Double annualIncome, Double healthSpending) {
        super(name, annualIncome);
        this.healthSpending = healthSpending;
    }

    public Double getHealthSpending() {
        return healthSpending;
    }

    public void setHealthSpending(Double healthSpending) {
        this.healthSpending = healthSpending;
    }

    @Override
    public Double totalTax() {
        Double annualIncome = getAnnualIncome();
        Double tax = 0.0;

        if (annualIncome < 20000.00) {
            tax = annualIncome * 0.15;
        }

        if (annualIncome >= 20000.00) {
            tax = annualIncome * 0.25;
        }

        return (tax - healthSpending * 0.5);
    }
}
