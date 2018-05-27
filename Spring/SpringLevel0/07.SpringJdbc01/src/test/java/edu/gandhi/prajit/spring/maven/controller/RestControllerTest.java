package edu.gandhi.prajit.spring.maven.controller;

import java.util.List;

import org.junit.Test;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import edu.gandhi.prajit.spring.maven.model.Ride;

public class RestControllerTest {

	@Test
	public void testCreateRide() {
		final Ride ride = Ride.builder().name("Bobsled Trail").duration(33);
		System.out.println("Ride: "
				+ new RestTemplate().postForObject("http://localhost:8080/SpringJdbc01/ride", ride, Ride.class));
	}

	@Test
	public void testGetRides() {
		final ResponseEntity<List<Ride>> ridesResponse = new RestTemplate().exchange(
				"http://localhost:8080/SpringJdbc01/rides", HttpMethod.GET, null,
				new ParameterizedTypeReference<List<Ride>>() {
				});
		System.out.println("Ride: " + ridesResponse.getBody());
	}

	@Test
	public void testGetRide() {
		final Ride ride = new RestTemplate().getForObject("http://localhost:8080/SpringJdbc01/ride/1", Ride.class);
		System.out.println("Ride name: " + ride.getName());
	}

	@Test
	public void testUpdateRide() {
		final RestTemplate restTemplate = new RestTemplate();
		final Ride ride = restTemplate.getForObject("http://localhost:8080/SpringJdbc01/ride/1", Ride.class);
		ride.setDuration(ride.getDuration() * ride.getDuration());
		restTemplate.put("http://localhost:8080/SpringJdbc01/ride", ride);
	}
	@Test
	public void testBatchUpdate() {
		new RestTemplate().getForObject("http://localhost:8080/SpringJdbc01/batch", Object.class);
	}
	@Test
	public void testDelete() {
		new RestTemplate().delete("http://localhost:8080/SpringJdbc01/delete/1");
	}
	@Test
	public void testException() {
		new RestTemplate().getForObject("http://localhost:8080/SpringJdbc01/exception", Ride.class);

	}
}
