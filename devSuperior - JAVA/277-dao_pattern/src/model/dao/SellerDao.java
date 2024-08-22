package model.dao;

import entities.Department;
import entities.Seller;

import java.util.List;

public interface SellerDao extends GenericDao<Seller> {
    List<Seller> findByDepartment(Department department);
}
