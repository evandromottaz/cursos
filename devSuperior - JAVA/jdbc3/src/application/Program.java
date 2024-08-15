package application;

import db.DB;

<<<<<<< HEAD
import java.sql.*;
=======
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
>>>>>>> cb6d553df4331660f605d917d5e1b9f6e39b38f8

public class Program {
    public static void main(String[] args) {
        Connection connection = null;
<<<<<<< HEAD
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
=======
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            connection = DB.getConnection();
            statement = connection.createStatement();
            resultSet = statement.executeQuery("select * from department");

            while (resultSet.next()) {
                System.out.println(resultSet.getInt("Id") + ", " + resultSet.getString("Name"));
>>>>>>> cb6d553df4331660f605d917d5e1b9f6e39b38f8
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
<<<<<<< HEAD
            DB.closeStatement(st);
=======
            DB.closeResultSet(resultSet);
            DB.closeStatement(statement);
>>>>>>> cb6d553df4331660f605d917d5e1b9f6e39b38f8
            DB.closeConnection();
        }
    }
}
