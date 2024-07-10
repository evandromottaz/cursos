package application;

import model.entities.CarRental;
import model.entities.Vehicle;
import model.services.BrazilTaxService;
import model.services.RentalService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

        System.out.println("Entre com os dados do aluguel");
        String carModel = "Civic";
        System.out.println("Modelo do carro: " + carModel);

        String start = "25/06/2018 10:30";
        LocalDateTime startTime = LocalDateTime.parse(start, dateTimeFormatter);
        System.out.println("Retirada (dd/MM/yyyy hh:mm): " + start);

        String end = "27/06/2018 11:40";
        LocalDateTime endTime = LocalDateTime.parse(end, dateTimeFormatter);
        System.out.println("Retorno (dd/MM/yyyy hh:mm): " + end);

        CarRental carRental = new CarRental(startTime, endTime, new Vehicle(carModel));

        double pricePerHour = 10.00;
        System.out.println("Preço por hora: " + pricePerHour);

        double pricePerDay = 130.00;
        System.out.println("Preço por dia: " + pricePerDay);

        RentalService rentalService = new RentalService(pricePerHour, pricePerDay, new BrazilTaxService());
        rentalService.processInvoice(carRental);

        System.out.println("FATURA:");
        System.out.println("Pagamento basico: " + String.format("%.2f",
                carRental.getInvoice().getBasicPayment()));
        System.out.println("Imposto: " + String.format("%.2f", carRental.getInvoice().getTax()));
        System.out.println("Pagamento total: " + String.format("%.2f", carRental.getInvoice().getTotalPayment()));
    }
}