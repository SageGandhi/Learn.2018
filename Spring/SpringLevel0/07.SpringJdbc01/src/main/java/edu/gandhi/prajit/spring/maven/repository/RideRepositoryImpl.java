package edu.gandhi.prajit.spring.maven.repository;

import java.sql.Types;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import edu.gandhi.prajit.spring.maven.model.Ride;
import edu.gandhi.prajit.spring.maven.repository.mapper.FluentHashMap;
import edu.gandhi.prajit.spring.maven.repository.mapper.RideRowMapper;
import edu.gandhi.prajit.spring.maven.repository.statement.RidePreparedStatementCreator;

@Repository("rideRepository")
public class RideRepositoryImpl implements RideRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Ride> getRides() {
		return jdbcTemplate.query("Select * From Rider.Ride",RideRowMapper.newInstance());
		/**return Arrays.asList(Ride.builder().name("Corner Canyon").duration(120));*/
	}
	
	@Override
	public Ride createRide(Ride ride) {
		jdbcTemplate.update("Insert Into Rider.Ride(Name,Duration)Values(?,?)", ride.getName(), ride.getDuration());
		
		final SimpleJdbcInsert simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate);
		simpleJdbcInsert.setGeneratedKeyName("Id");
		simpleJdbcInsert.setTableName("Rider.Ride");
		simpleJdbcInsert.setColumnNames(Arrays.asList("Name","Duration"));
		
		Map<String, Object> mapColumnData = FluentHashMap
				.<String,Object>map("Name", ride.getName())
				.with("Duration", ride.getDuration());
		System.out.println("Id For Inserted Data:"+simpleJdbcInsert.executeAndReturnKey(mapColumnData));
		
		final KeyHolder keyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(RidePreparedStatementCreator.newInstance(ride),keyHolder);
		System.out.println("Key Holder Key:"+keyHolder.getKey());
		return getRide(keyHolder.getKey());
	}
	@Override
	public Ride getRide(Number key) {
		return jdbcTemplate.queryForObject("Select * From Rider.Ride Where Id = ?",RideRowMapper.newInstance(), key);
	}

	@Override
	public Ride updateRide(Ride ride) {
		jdbcTemplate.update("Update Rider.Ride Set Name = ?, Duration = ? Where Id = ?", 
				ride.getName(), ride.getDuration(), ride.getId());
		return ride;
	}

	@Override
	public void updateRides(List<Object[]> pairs) {
		jdbcTemplate.batchUpdate("Update Rider.Ride Set RideDate=? Where Id = ?",pairs,new int[]{Types.TIMESTAMP,Types.INTEGER});
	}

	@Override
	public void deleteRide(Integer id) {
		/**jdbcTemplate.update("Delete From Rider.Ride Where Id = ?",id);*/
		new NamedParameterJdbcTemplate(jdbcTemplate).update("Delete From Rider.Ride Where Id = :Id",FluentHashMap.map("Id",id));
	}
}