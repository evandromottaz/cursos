package model.dao;

import entities.Seller;
import model.dao.impl.SellerDaoImplJDBC;

public class DaoFactory {
    public static GenericDao<Seller> createSellerDao() {
        return new SellerDaoImplJDBC();
    }
}
