package entities;

import entities.enums.WorkerLevel;

import java.util.ArrayList;
import java.util.List;

public class Worker {
    private final String name;
    private final WorkerLevel level;
    private final Double baseSalary;
    private final List<HourContract> contractList = new ArrayList<>();
    private Department department;

    public Worker(String name, WorkerLevel level, Double baseSalary) {
        this.name = name;
        this.level = level;
        this.baseSalary = baseSalary;
    }

    public void addContract(HourContract contract) {
        contractList.add(contract);
    }

    public void removeContract(HourContract contract) {
        contractList.remove(contract);
    }

    public String getName() {
        return name;
    }

    public WorkerLevel getLevel() {
        return level;
    }

    public Double getBaseSalary() {
        return baseSalary;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Double income(Integer month, Integer year) {
        double totalIncome = 0;

        for (HourContract contract : contractList) {

            if (contract.getDate().getMonthValue() == month
                    && contract.getDate().getYear() == year) {
                totalIncome += contract.totalValue();
            }
        }

        return totalIncome + baseSalary;
    }
}
