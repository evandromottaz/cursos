package entities;

public class LegalEntity extends TaxPayer {
    private Integer employeeNumber;

    public LegalEntity(String name, Double annualIncome, Integer employeeNumber) {
        super(name, annualIncome);
        this.employeeNumber = employeeNumber;
    }

    public Number getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(Integer employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

    @Override
    public Double totalTax() {
        Double annualIncome = getAnnualIncome();
        Double tax = 0.0;

        if (employeeNumber > 10) {
            tax = annualIncome * 0.14;
        } else {
            tax = annualIncome * 0.16;
        }

        return tax;
    }
}
