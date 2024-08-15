package program;

import entities.Department;
import model.dao.DaoFactory;
import model.dao.GenericDao;

public class Program2 {
    public static void main(String[] args) {
        GenericDao<Department> departmentDao = DaoFactory.createDepartmentDao();

        System.out.println("Test findById");
        System.out.println(departmentDao.findById(1));
    }
}
