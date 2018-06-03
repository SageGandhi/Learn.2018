package edu.gandhi.prajit.spring.maven.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class BasicRestController {
	@Autowired
	private RestTemplate restTemplate;

	@GetMapping
	public String getTime() {
		/**Used For @LoadBalanced With @EnableServiceDiscovery*/
		/*return restTemplate.getForEntity("http://TimeServiceForRibbon/", String.class).getBody();*/
		return restTemplate.getForEntity("http://TimeServiceForRibbon/", String.class).getBody();
	}
}
