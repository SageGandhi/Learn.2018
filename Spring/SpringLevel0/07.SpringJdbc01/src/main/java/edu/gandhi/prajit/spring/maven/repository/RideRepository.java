package edu.gandhi.prajit.spring.maven.repository;

import java.util.List;

import edu.gandhi.prajit.spring.maven.model.Ride;

public interface RideRepository {
	List<Ride> getRides();

	Ride createRide(Ride ride);
	
	Ride getRide(Number key);

	Ride updateRide(Ride ride);

	void updateRides(List<Object[]> pairs);

	void deleteRide(Integer id);
}
