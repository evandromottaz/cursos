package model.services;

import model.entities.Contract;
import model.entities.Installment;

import java.time.LocalDate;

public class ContractService {
    private OnlinePaymentService paymentService;

    public void processContract(Contract contract, Integer months) {
        for (int i = 1; i <= months; i++) {
            Double amount = contract.getTotalValue() / months;
            Double amountWithInterest = paymentService.interest(amount, i);
            Double fee = paymentService.paymentFee(amountWithInterest);

            LocalDate dueDate = contract.getDate().plusMonths(i);
            Installment installment = new Installment(dueDate, fee);

            contract.addInstallment(installment);
        }
    }

    public void setPaymentService(OnlinePaymentService paymentService) {
        this.paymentService = paymentService;
    }
}
