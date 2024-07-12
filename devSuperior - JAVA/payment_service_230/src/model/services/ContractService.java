package model.services;

import model.entities.Contract;
import model.entities.Installment;

import java.time.LocalDate;

public class ContractService {
    private final OnlinePaymentService paymentService;

    public ContractService(OnlinePaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void processContract(Contract contract, Integer months) {
        Double basicQuota = contract.getTotalValue() / months;

        for (int i = 1; i <= months; i++) {
            Double interest = paymentService.interest(basicQuota, i);
            Double fee = paymentService.paymentFee(interest + basicQuota);
            Double quota = basicQuota + fee + interest;

            LocalDate dueDate = contract.getDate().plusMonths(i);
            Installment installment = new Installment(dueDate, quota);

            contract.getInstallments().add(installment);
        }
    }
}
