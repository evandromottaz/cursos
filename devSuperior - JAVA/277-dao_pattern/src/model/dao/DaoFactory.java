package model.dao;

import db.DB;
import entities.Seller;
import model.dao.impl.SellerDaoImplJDBC;

public class DaoFactory {
    public static GenericDao<Seller> createSellerDao() {
        return new SellerDaoImplJDBC(DB.getConnection());
    }
}
