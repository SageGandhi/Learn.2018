package edu.gandhi.prajit.spring.maven.controller;

import org.joda.time.LocalDate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.servo.jsr166e.ThreadLocalRandom;

@RestController
public class BasicRestController {
	@GetMapping
	public String getTime() {
		return "Welcome To 12.WeatherServiceHystrix@"+LocalDate.now();
	}
	@GetMapping("/weather")
	public String getWeather() {
		String[] weathers = {"Rainy","Sunny","Windy","Cloudy"};
		return weathers[ThreadLocalRandom.current().nextInt(0,4)];
	}
}
