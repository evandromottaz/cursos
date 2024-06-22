package model.entities;

import model.exceptions.AccountException;

public class Account {
    private Integer number;
    private String holder;
    private Double balance;
    private Double withdrawLimit;

    public Account(Integer number, String holder, Double initialBalance, Double withdrawLimit) {
        this.holder = holder;
        this.balance = initialBalance;
        this.withdrawLimit = withdrawLimit;
        this.number = number;

        if (initialBalance == 0) {
            throw new AccountException("A quantia de deposíto inicial não pode ser 0.");
        }
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getHolder() {
        return holder;
    }

    public void setHolder(String holder) {
        this.holder = holder;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Double getWithdrawLimit() {
        return withdrawLimit;
    }

    public void setWithdrawLimit(Double withdrawLimit) {
        this.withdrawLimit = withdrawLimit;
    }

    public void deposit(Double amount) {
        balance += amount;
    }

    public void withdraw(Double amount) {
        if (amount > withdrawLimit) {
            throw new AccountException("Erro no saque: A quantia excede o limite de saque.");
        }
        if (amount > balance) {
            throw new AccountException("Erro no saque: Saldo insuficiente.");
        }
        balance -= amount;
    }
}
