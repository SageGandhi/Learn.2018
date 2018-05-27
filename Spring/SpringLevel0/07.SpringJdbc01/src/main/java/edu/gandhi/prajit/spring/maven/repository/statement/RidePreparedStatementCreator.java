package edu.gandhi.prajit.spring.maven.repository.statement;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.jdbc.core.PreparedStatementCreator;

import edu.gandhi.prajit.spring.maven.model.Ride;

public class RidePreparedStatementCreator implements PreparedStatementCreator {
	private Ride ride;
	/**
	 * @return the ride
	 */
	public Ride getRide() {
		return ride;
	}
	
	@Override
	public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
		PreparedStatement ps = con.prepareStatement("Insert Into Rider.Ride(Name,Duration)Values(?,?)",
				new String[] { "Id" });
		ps.setString(1, ride.getName());
		ps.setInt(2, ride.getDuration());
		return ps;
	}
	public static PreparedStatementCreator newInstance(Ride ride) {
		final RidePreparedStatementCreator creator = new RidePreparedStatementCreator();
		creator.ride = ride;
		return creator;
		
	}
}