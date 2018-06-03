package edu.gandhi.prajit.spring.maven.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.gandhi.prajit.spring.maven.rest.service.BasicRestService;

@RestController
public class BasicRestController {
	@Autowired
	private BasicRestService basicRestService;

	@GetMapping("/current/datetime")
	public String getWeather() {
		return "Current DateTime:"+basicRestService.getDateTime();
	}
}
