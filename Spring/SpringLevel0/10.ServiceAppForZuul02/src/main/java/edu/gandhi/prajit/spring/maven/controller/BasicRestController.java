package edu.gandhi.prajit.spring.maven.controller;

import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicRestController {
	@RequestMapping
	public String message(@RequestHeader("X-Prajit-Zuul-Location")String location) {
		return "Welcome To 10.ServiceAppForZuul02@"+location;
	}
}
