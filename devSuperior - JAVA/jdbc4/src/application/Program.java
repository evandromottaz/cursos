package application;

import db.DB;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Program {
    public static void main(String[] args) {
        Connection connection;
        PreparedStatement st = null;

        String query = "update seller set BaseSalary = BaseSalary + ? where (DepartmentId = ?)";
        String query2 = "update seller set BaseSalary = 999.99 where (Id = 1)";

        try {
            connection = DB.getConnection();
            st = connection.prepareStatement(query2);
//            st.setDouble(1, 200.0);
//            st.setInt(2, 2);

            int rows = st.executeUpdate();
            System.out.println("Rows affected " + rows);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DB.closeStatement(st);
            DB.closeConnection();
        }
    }
}
