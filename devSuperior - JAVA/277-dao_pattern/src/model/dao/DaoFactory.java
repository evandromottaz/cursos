package model.dao;

import db.DB;
import entities.Department;
import model.dao.impl.DepartmentDaoImplJDNC;
import model.dao.impl.SellerDaoImplJDBC;

public class DaoFactory {
    public static SellerDao createSellerDao() {
        return new SellerDaoImplJDBC(DB.getConnection());
    }

    public static GenericDao<Department> createDepartmentDao() {
        return new DepartmentDaoImplJDNC(DB.getConnection());
    }
}
