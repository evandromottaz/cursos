package model.dao.impl;

import db.DB;
import db.DbException;
import entities.Department;
import model.dao.GenericDao;

import java.sql.*;
import java.util.Collections;
import java.util.List;

public class DepartmentDaoImplJDNC implements GenericDao<Department> {
    private final Connection conn;

    public DepartmentDaoImplJDNC(Connection conn) {
        this.conn = conn;
    }

    @Override
    public void insert(Department department) {
        PreparedStatement st = null;
        ResultSet rs = null;

        String QUERY = "INSERT INTO department (Name) VALUES (?)";

        try {
            st = conn.prepareStatement(QUERY, Statement.RETURN_GENERATED_KEYS);
            st.setString(1, department.getName());

            int row = st.executeUpdate();
            boolean isAdd = row > 0;

            if (isAdd) {
                rs = st.getGeneratedKeys();

                if (rs.next()) {
                    department.setId(rs.getInt(1));
                }
                return;
            }

            throw new DbException("Unexpected Error: Is not possible to insert department: " + department.getName());
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeResultSet(rs);
            DB.closeStatement(st);
        }
    }

    @Override
    public void update(Department department) {
        PreparedStatement st = null;

        String QUERY = "UPDATE department SET Name = ? WHERE Id = ?";

        try {
            st = conn.prepareStatement(QUERY);

            st.setString(1, department.getName());
            st.setInt(2, department.getId());
            st.executeUpdate();
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeStatement(st);
        }
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
                return createDepartment(rs);
            }
            return null;
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeResultSet(rs);
            DB.closeStatement(st);
        }
    }

    private Department createDepartment(ResultSet rs) throws SQLException {
        Department department = new Department();
        department.setName(rs.getString("Name"));
        department.setId(rs.getInt("Id"));
        return department;
    }

    @Override
    public List<Department> findAll() {
        return Collections.emptyList();
    }
}
