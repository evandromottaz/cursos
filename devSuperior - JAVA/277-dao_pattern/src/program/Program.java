package program;

import entities.Department;
import entities.Seller;
import model.dao.DaoFactory;
import model.dao.SellerDao;

import java.util.List;

public class Program {
    public static void main(String[] args) {

        SellerDao sellerDao = DaoFactory.createSellerDao();
        System.out.println("TEST SELLER FIND_BY_ID");
        Seller seller = sellerDao.findById(1);
        System.out.println(seller);

        System.out.println("\nTEST SELLER FIND_BY_DEPARTMENT");
        Department department = new Department(2, null);
        List<Seller> sellers = sellerDao.findByDepartment(department);
        for (Seller s : sellers) {
            System.out.println(s);
        }

        System.out.println("\nTEST SELLER FIND_ALL");
        sellers = sellerDao.findAll();
        for (Seller s : sellers) {
            System.out.println(s);
        }
    }
}
