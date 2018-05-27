package edu.gandhi.prajit.spring.maven.service;

import java.util.List;

import edu.gandhi.prajit.spring.maven.model.Ride;

public interface RideService {
	List<Ride> getRides();
	Ride createRide(Ride ride);
	Ride getRide(Integer key);
	Ride updateRide(Ride ride);
	void batch();
	void deleteRide(Integer id);
}
