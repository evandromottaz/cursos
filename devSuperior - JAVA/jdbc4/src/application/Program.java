package application;

import db.DB;

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
        } finally {
            DB.closeStatement(st);
            DB.closeConnection();
        }
    }
}
