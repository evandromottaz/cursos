package model.dao.impl;

import db.DB;
import db.DbException;
import entities.Department;
import entities.Seller;
import model.dao.GenericDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

public class SellerDaoImplJDBC implements GenericDao<Seller> {
    private final Connection conn;

    public SellerDaoImplJDBC(Connection conn) {
        this.conn = conn;
    }

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
        PreparedStatement st = null;
        ResultSet rs = null;

        try {
            st = conn.prepareStatement(
                    "SELECT seller.*, department.Name as DepName "
                            + "FROM seller INNER JOIN department "
                            + "WHERE seller.Id = ?"
            );
            st.setInt(1, id);
            rs = st.executeQuery();

            if (rs.next()) {
                Department department = new Department();
                department.setId(rs.getInt("DepartmentId"));
                department.setName(rs.getString("DepName"));

                Seller seller = new Seller();
                seller.setId(rs.getInt("Id"));
                seller.setName(rs.getString("Name"));
                seller.setEmail(rs.getString("Email"));
                seller.setBrithDate(rs.getDate("BirthDate"));
                seller.setBaseSalary(rs.getDouble("BaseSalary"));
                seller.setDepartment(department);

                return seller;
            }
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeStatement(st);
            DB.closeResultSet(rs);
        }
        return null;
    }

    @Override
    public List<Seller> findAll() {
        return Collections.emptyList();
    }
}
