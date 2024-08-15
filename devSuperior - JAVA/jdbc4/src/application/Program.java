package application;

import db.DB;

<<<<<<< HEAD
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
=======
import java.sql.*;

public class Program {
    public static void main(String[] args) {
        Connection connection = null;
        PreparedStatement st = null;

        String QUERY_SELLER = "insert into seller values (null,'Carl Purple','carl@gmail.com'," +
                "'1995/06/23','3600.00','4')";

        try {
            connection = DB.getConnection();
            st = connection.prepareStatement(QUERY_SELLER, Statement.RETURN_GENERATED_KEYS);

            int rowsAffected = st.executeUpdate();
            if (rowsAffected > 0) {
                ResultSet rs = st.getGeneratedKeys();
                while (rs.next()) {
                    int id = rs.getInt(1);
                    System.out.println("Id = " + id);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
>>>>>>> cb6d553df4331660f605d917d5e1b9f6e39b38f8
        } finally {
            DB.closeStatement(st);
            DB.closeConnection();
        }
    }
}
