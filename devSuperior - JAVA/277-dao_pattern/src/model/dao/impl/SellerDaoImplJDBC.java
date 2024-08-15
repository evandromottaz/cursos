package model.dao.impl;

import entities.Seller;
import model.dao.GenericDao;

import java.util.Collections;
import java.util.List;

public class SellerDaoImplJDBC implements GenericDao<Seller> {
    @Override
    public void insert(Seller e) {

    }

    @Override
    public void update(Seller e) {

    }

    @Override
    public void deleteById(Integer id) {

    }

    @Override
    public Seller findById(Integer id) {
        return null;
    }

    @Override
    public List<Seller> findAll() {
        return Collections.emptyList();
    }
}
