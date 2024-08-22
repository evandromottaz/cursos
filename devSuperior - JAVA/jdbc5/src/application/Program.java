package application;

import db.DB;
import db.DbIntegrityException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Program {
    public static void main(String[] args) {
        Connection connection;
        PreparedStatement st = null;

        String query = "delete from department where id = 2";

        try {
            connection = DB.getConnection();
            st = connection.prepareStatement(query);

            int rows = st.executeUpdate();
            System.out.println("Rows affected " + rows);
        } catch (SQLException e) {
            throw new DbIntegrityException(e.getMessage());
        } finally {
            DB.closeStatement(st);
            DB.closeConnection();
        }
    }
}
