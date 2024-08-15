package program;

import entities.Department;
import entities.Seller;
import model.dao.DaoFactory;
import model.dao.GenericDao;

import java.util.Date;

public class Program {
    public static void main(String[] args) {
        Department department = new Department(1, "Books");
        Seller seller = new Seller(1, "Roger", "roger@gmail.com", new Date(), 2.500, department);

        GenericDao<Seller> sellerDao = DaoFactory.createSellerDao();
        System.out.println(seller);
    }
}
