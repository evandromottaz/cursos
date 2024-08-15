package program;

import entities.Seller;
import model.dao.DaoFactory;
import model.dao.GenericDao;

public class Program {
    public static void main(String[] args) {

        GenericDao<Seller> sellerDao = DaoFactory.createSellerDao();
        Seller seller = sellerDao.findById(1);

        System.out.println(seller);
    }
}
