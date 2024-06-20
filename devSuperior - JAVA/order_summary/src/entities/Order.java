package entities;

import entities.enums.OrderStatus;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class Order {
    private final ArrayList<OrderItem> products = new ArrayList<>();
    private LocalDateTime moment;
    private OrderStatus status;
    private Client client;

    public Order(LocalDateTime moment, OrderStatus status) {
        this.moment = moment;
        this.status = status;
    }

    public LocalDateTime getMoment() {
        return moment;
    }

    public void setMoment(LocalDateTime moment) {
        this.moment = moment;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void addItem(OrderItem orderItem) {
        products.add((orderItem));
    }

    public void removeItem(OrderItem orderItem) {
        products.remove((orderItem));
    }

    public Double total() {
        Double total = 0.0;

        for (OrderItem o : products) {
            total += o.subTotal();
        }

        return total;
    }

    @Override
    public String toString() {
        DateTimeFormatter momentPattern = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm:ss");
        DateTimeFormatter birthDatePattern = DateTimeFormatter.ofPattern("(dd/MM/yyyy) - ");

        StringBuilder sb = new StringBuilder();
        sb.append("\nORDER SUMMARY:\n");
        sb.append("Order moment: ").append(moment.format(momentPattern));
        sb.append("\nOrder status: ").append(status);

        sb.append("\nClient: ");
        sb.append(client.getName()).append(" ");
        sb.append(client.getBirthDate().format(birthDatePattern));
        sb.append(client.getEmail());
        sb.append("\nOrder Items:\n");

        for (OrderItem orderItem : products) {
            sb.append(orderItem.toString());
        }

        sb.append("Total price: $").append(String.format("%.2f", total()));

        return sb.toString();
    }
}
