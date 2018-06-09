package edu.gandhi.prajit.maven.err.service;

import java.sql.Connection;
import java.sql.SQLException;

public class FirstService {
	private Connection connection;
	public void doSomeJdbcStuff(){
		try {
			// Make DeclareErrorAspect :: @DeclareWarning/@DeclareError
			connection.close();
		} catch (SQLException sqlException) {
			sqlException.printStackTrace();
		}
	}
}
