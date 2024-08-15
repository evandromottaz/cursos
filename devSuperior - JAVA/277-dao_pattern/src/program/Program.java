package program;

import entities.Department;
import entities.Seller;
import model.dao.DaoFactory;
import model.dao.SellerDao;

import java.util.Date;
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

        System.out.println("\nTEST INSERT NEW SELLER");
        Seller seller1 = new Seller(null, "Greg", "greg@gmail.com", new Date(),
                3000.00, department);
        sellerDao.insert(seller1);
        System.out.println("Seller " + seller1.getName() + " was added!");

        System.out.println("\nTEST UPDATE SELLER");
        seller = sellerDao.findById(2);
        seller.setName("Roger");
        sellerDao.update(seller);
        System.out.println("SELLER UPDATED!");

        System.out.println("\n TEST DELETE SELLER BY_ID");
        sellerDao.deleteById(3);
    }
}
