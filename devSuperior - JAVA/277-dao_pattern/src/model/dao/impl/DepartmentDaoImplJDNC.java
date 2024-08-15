package model.dao.impl;

import db.DB;
import db.DbException;
import entities.Department;
import model.dao.GenericDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
        PreparedStatement st = null;
        ResultSet rs = null;

        String QUERY = "SELECT * FROM department WHERE Id = ?";

        try {
            st = conn.prepareStatement(QUERY);
            st.setInt(1, id);
            rs = st.executeQuery();

            if (rs.next()) {
                Department department = new Department();
                department.setName(rs.getString("Name"));
                department.setId(rs.getInt("Id"));
                return department;
            }
            return null;
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeResultSet(rs);
            DB.closeStatement(st);
        }
    }

    @Override
    public List<Department> findAll() {
        return Collections.emptyList();
    }
}
