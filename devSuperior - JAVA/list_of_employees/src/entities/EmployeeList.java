package entities;

import java.util.ArrayList;
import java.util.List;

public class EmployeeList {
    private final List<Employee> list = new ArrayList<>();

    public boolean has(int id) {
        return this.find(id) != null;
    }

    public void add(Employee employee) {
        list.add(employee);
    }

    public Employee find(int id) {
        if (list.isEmpty()) {
            return null;
        }
        return list.stream().filter(e -> e.getId() == id).findFirst().orElse(null);
    }

    public List<Employee> getList() {
        return list;
    }
}
