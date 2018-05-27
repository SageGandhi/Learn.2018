package edu.gandhi.prajit.spring.maven.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.gandhi.prajit.spring.maven.model.Ride;
import edu.gandhi.prajit.spring.maven.repository.RideRepository;

@Service("rideService")
public class RideServiceImpl implements RideService {
	@Autowired
	private RideRepository rideRepository;

	@Override
	public List<Ride> getRides() {
		return rideRepository.getRides();
	}

	@Override
	public Ride createRide(Ride ride) {
		return rideRepository.createRide(ride);
	}

	@Override
	public Ride getRide(Integer key) {
		return rideRepository.getRide(key);
	}

	@Override
	public Ride updateRide(Ride ride) {
		return rideRepository.updateRide(ride);
	}

	@Override
	@Transactional
	public void batch() {
		List<Ride> rides = rideRepository.getRides();
		rideRepository.updateRides(rides.stream().map(ride -> new Object[] { new java.util.Date(), ride.getId() })
				.collect(Collectors.toList()));
		/**Test Transactional & Rollback:Otherwise Comment*/
		/**throw new DataIntegrityViolationException("DataIntegrityViolationException@RideServiceImpl.");*/
	}

	@Override
	public void deleteRide(Integer id) {
		rideRepository.deleteRide(id);
	}
}
