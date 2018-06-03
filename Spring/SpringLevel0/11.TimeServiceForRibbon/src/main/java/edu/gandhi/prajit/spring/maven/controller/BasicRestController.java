package edu.gandhi.prajit.spring.maven.controller;

import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicRestController {
	@Value("${server.port}")
	private int port;
	@GetMapping
	public String getTime() {
		return "Welcome To 11.TimeServiceForRibbon Running @"+port+":Time@"+LocalDate.now();
	}
}
