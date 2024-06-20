package entities;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class HourContract {
    private final LocalDate date;
    private final Double valuePerHour;
    private final Integer hours;

    public HourContract(String date, Double valuePerHour, Integer hours) {
        this.date = LocalDate.parse(date, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        this.valuePerHour = valuePerHour;
        this.hours = hours;
    }

    public Double totalValue() {
        return hours * valuePerHour;
    }

    public LocalDate getDate() {
        return date;
    }
}
