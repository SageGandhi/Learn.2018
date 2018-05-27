package edu.gandhi.prajit.spring.maven.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import edu.gandhi.prajit.spring.maven.model.Ride;
import edu.gandhi.prajit.spring.maven.model.ServiceError;
import edu.gandhi.prajit.spring.maven.repository.mapper.FluentHashMap;
import edu.gandhi.prajit.spring.maven.service.RideService;

@Controller
public class RideController {

	@Autowired
	private RideService rideService;

	@RequestMapping(value = "/rides", method = RequestMethod.GET)
	public @ResponseBody List<Ride> getRides() {
		return rideService.getRides();
	}

	@RequestMapping(value = "/ride", method = RequestMethod.POST)
	public @ResponseBody Ride createRide(@RequestBody Ride ride) {
		return rideService.createRide(ride);
	}

	@RequestMapping(value = "/ride/{id}", method = RequestMethod.GET)
	public @ResponseBody Ride getRide(@PathVariable(value = "id") Integer id) {
		return rideService.getRide(id);
	}

	@RequestMapping(value = "/ride", method = RequestMethod.PUT)
	public @ResponseBody Ride updateRide(@RequestBody Ride ride) {
		return rideService.updateRide(ride);
	}

	@RequestMapping(value = "/batch", method = RequestMethod.GET)
	public @ResponseBody Map<String, String> batch() {
		rideService.batch();
		return FluentHashMap.<String, String>map("Status", "Ok");
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public @ResponseBody Map<String, String> delete(@PathVariable(value = "id") Integer id) {
		rideService.deleteRide(id);
		return FluentHashMap.<String, String>map("Status", "Ok");
	}

	@RequestMapping(value = "/exception", method = RequestMethod.GET)
	public @ResponseBody Map<String, String> exception() {
		throw new DataIntegrityViolationException("DataIntegrityViolationException@RideController.");
	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<ServiceError> handle(RuntimeException ex) {
		ex.printStackTrace();
		return new ResponseEntity<>(ServiceError.builder().code(HttpStatus.OK.value()).message(ex.getMessage()),
				HttpStatus.OK);
	}
}
