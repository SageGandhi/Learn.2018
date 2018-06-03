package edu.gandhi.prajit.spring.maven.controller;

import org.joda.time.LocalDate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicRestController {
	@GetMapping
	public String getTime() {
		return "Welcome To 12.WeatherServiceHystrix@"+LocalDate.now();
	}
	@GetMapping("/datetime")
	public String getWeather() {
		return LocalDate.now().toString();
	}
}
