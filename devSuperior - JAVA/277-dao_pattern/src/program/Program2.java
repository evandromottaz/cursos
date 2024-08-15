package program;

import entities.Department;
import model.dao.DaoFactory;
import model.dao.GenericDao;

public class Program2 {
    public static void main(String[] args) {
        GenericDao<Department> departmentDao = DaoFactory.createDepartmentDao();

        System.out.println("TEST FIND_BY_ID");
        System.out.println(departmentDao.findById(1));

        System.out.println("\bTEST ADD NEW DEPARTMENT");
        Department department = new Department(null, "Movies");
        departmentDao.insert(department);
        System.out.println(department.getName() + " was added!");

        System.out.println("\bTEST UPDATE DEPARTMENT");
        department = departmentDao.findById(5);
        department.setName("Cars");
        departmentDao.update(department);
        System.out.println(department.getName() + " was updated!");

        System.out.println("\bTEST DELETE DEPARTMENT");
        departmentDao.deleteById(6);
    }
}
