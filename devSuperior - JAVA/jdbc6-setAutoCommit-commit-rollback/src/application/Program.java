package application;

import db.DB;
import db.DbException;
import db.DbIntegrityException;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class Program {
    public static void main(String[] args) {
        Connection connection = null;
        Statement st = null;

        String UPDATE_SALARY_DEP_1 = "UPDATE seller SET BaseSalary = 2090 WHERE DepartmentId = 1";
        String UPDATE_SALARY_DEP_2 = "UPDATE seller SET BaseSalary = 3090 WHERE DepartmentId = 2";

        try {
            connection = DB.getConnection();
            st = connection.createStatement();
            connection.setAutoCommit(false);

            int rows1 = st.executeUpdate(UPDATE_SALARY_DEP_1);

            if (true) {
                throw new DbException("Fake error");
            }

            int rows2 = st.executeUpdate(UPDATE_SALARY_DEP_2);
            System.out.println("Rows1 affected " + rows1);
            System.out.println("Rows2 affected " + rows2);
        } catch (SQLException e) {
            try {
                connection.rollback();
                throw new DbException("Transaction rolled back! Caused by: " + e.getMessage());
            } catch (SQLException ex) {
                throw new DbIntegrityException("Error traying to rollback! Caused by: " + ex.getMessage());
            }
        } finally {
            DB.closeStatement(st);
            DB.closeConnection();
        }
    }
}
