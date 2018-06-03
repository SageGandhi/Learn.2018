package edu.gandhi.prajit.spring.maven.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicRestController {

	@Value("${spring.service.instance.name}")
	private String instanceName;

	@RequestMapping("/")
	public String message() {
		return "Created AppServiceInstance01.launch & AppServiceInstance02.launch.Your Request Handled  By  Instance:" + instanceName;
	}
}
