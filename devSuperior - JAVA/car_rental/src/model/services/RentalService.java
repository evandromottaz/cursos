package model.services;

import model.entities.CarRental;
import model.entities.Invoice;

import java.time.Duration;

public class RentalService {
    private Double pricePerHour;
    private Double pricePerDay;

    private TaxService taxService;

    public RentalService(Double pricePerHour, Double pricePerDay, TaxService taxService) {
        this.pricePerHour = pricePerHour;
        this.pricePerDay = pricePerDay;
        this.taxService = taxService;
    }

    public Double getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(Double pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public Double getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(Double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public TaxService getTaxService() {
        return taxService;
    }

    public void setTaxService(TaxService taxService) {
        this.taxService = taxService;
    }

    public void processInvoice(CarRental carRental) {
        double minutes =
                Duration.between(carRental.getStartTime(), carRental.getEndTime()).toMinutes();
        double hours = minutes / 60;

        double basicPayment;

        if (hours > 12.0) {
            basicPayment = Math.ceil(hours / 24) * getPricePerDay();
        } else {
            basicPayment = Math.ceil(hours) * getPricePerHour();
        }

        double tax = taxService.tax(basicPayment);
        carRental.setInvoice(new Invoice(tax, basicPayment));
    }
}
