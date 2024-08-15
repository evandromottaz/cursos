package model.dao.impl;

import db.DB;
import db.DbException;
import entities.Department;
import entities.Seller;
import model.dao.SellerDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SellerDaoImplJDBC implements SellerDao {
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
                Department department = createDepartment(rs);
                return createSeller(rs, department);
            }
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeStatement(st);
            DB.closeResultSet(rs);
        }
        return null;
    }

    private Seller createSeller(ResultSet rs, Department department) throws SQLException {
        Seller seller = new Seller();
        seller.setId(rs.getInt("Id"));
        seller.setName(rs.getString("Name"));
        seller.setEmail(rs.getString("Email"));
        seller.setBrithDate(rs.getDate("BirthDate"));
        seller.setBaseSalary(rs.getDouble("BaseSalary"));
        seller.setDepartment(department);
        return seller;
    }

    private Department createDepartment(ResultSet rs) throws SQLException {
        Department department = new Department();
        department.setId(rs.getInt("DepartmentId"));
        department.setName(rs.getString("DepName"));
        return department;
    }

    @Override
    public List<Seller> findAll() {
        PreparedStatement st = null;
        ResultSet rs = null;
        List<Seller> sellers = new ArrayList<>();
        Map<Integer, Department> departmentMap = new HashMap<>();

        try {
            st = conn.prepareStatement(
                    "SELECT seller.*, department.Name as DepName "
                            + "FROM seller INNER JOIN department "
                            + "ON seller.DepartmentId = department.Id "
                            + "ORDER BY Name"
            );
            rs = st.executeQuery();

            while (rs.next()) {
                int departmentId = rs.getInt("DepartmentId");
                Department dep = departmentMap.get(departmentId);

                if (dep == null) {
                    dep = createDepartment(rs);
                    departmentMap.put(departmentId, dep);
                }

                Seller seller = createSeller(rs, dep);
                sellers.add(seller);
            }

            return sellers;
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeStatement(st);
            DB.closeResultSet(rs);
        }
    }

    @Override
    public List<Seller> findByDepartment(Department department) {
        PreparedStatement st = null;
        ResultSet rs = null;
        List<Seller> sellers = new ArrayList<>();
        Map<Integer, Department> departmentMap = new HashMap<>();

        try {
            st = conn.prepareStatement(
                    "SELECT seller.*, department.Name as DepName "
                            + "FROM seller INNER JOIN department "
                            + "ON seller.DepartmentId = department.Id "
                            + "WHERE DepartmentId = ? "
                            + "ORDER BY Name"
            );
            st.setInt(1, department.getId());
            rs = st.executeQuery();

            while (rs.next()) {
                int departmentId = rs.getInt("DepartmentId");
                Department dep = departmentMap.get(departmentId);

                if (dep == null) {
                    dep = createDepartment(rs);
                    departmentMap.put(departmentId, dep);
                }

                Seller seller = createSeller(rs, dep);
                sellers.add(seller);
            }

            return sellers;
        } catch (SQLException e) {
            throw new DbException(e.getMessage());
        } finally {
            DB.closeStatement(st);
            DB.closeResultSet(rs);
        }
    }
}
