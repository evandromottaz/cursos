package util;

public class CurrencyConverter {
    static final double IOF = 0.06;

    public static double convert(double dollarAmount, double price) {
        return dollarAmount * price + (dollarAmount * price * IOF);
    }
}
