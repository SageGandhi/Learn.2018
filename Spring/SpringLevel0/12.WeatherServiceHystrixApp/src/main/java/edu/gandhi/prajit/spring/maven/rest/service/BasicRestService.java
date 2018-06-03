package edu.gandhi.prajit.spring.maven.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Service
public class BasicRestService {
	/**
	 * HystrixCommand Works For Only @Service & @Component
	 */
	@Autowired
	private RestTemplate restTemplate;

	@HystrixCommand(fallbackMethod="getUnknown")
	public String getWeather() {
		return restTemplate.getForEntity("http://WeatherServiceHystrix/weather", String.class).getBody();
	}
	public String getUnknown() {
		return "UnKnown Weather";
	}
}
