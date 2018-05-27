package edu.gandhi.prajit.spring.maven.repository.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import edu.gandhi.prajit.spring.maven.model.Ride;

public class RideRowMapper implements RowMapper<Ride> {
	@Override
	public Ride mapRow(ResultSet rs, int rowNum) throws SQLException {
		return Ride.builder().id(rs.getInt("Id")).name(rs.getString("Name")).duration(rs.getInt("Duration"));
	}

	public static RideRowMapper newInstance() {
		return new RideRowMapper();
	}
}