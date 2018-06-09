package edu.gandhi.prajit.maven.err.repository;

import java.sql.Connection;
import java.sql.SQLException;

public class FirstRepository {
	private Connection connection;
	public void doSomeJdbcStuff() throws SQLException {
		connection.close();
	}
}
