package model.dao.impl;

import entities.Department;
import model.dao.GenericDao;

import java.sql.Connection;
import java.util.Collections;
import java.util.List;

public class DepartmentDaoImplJDNC implements GenericDao<Department> {
    private final Connection conn;

    public DepartmentDaoImplJDNC(Connection conn) {
        this.conn = conn;
    }

    @Override
    public void insert(Department e) {

    }

    @Override
    public void update(Department e) {

    }

    @Override
    public void deleteById(Integer id) {

    }

    @Override
    public Department findById(Integer id) {
        return null;
    }

    @Override
    public List<Department> findAll() {
        return Collections.emptyList();
    }
}
