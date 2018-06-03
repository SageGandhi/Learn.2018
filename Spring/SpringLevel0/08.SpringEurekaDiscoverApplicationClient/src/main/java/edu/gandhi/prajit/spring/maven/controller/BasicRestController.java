package edu.gandhi.prajit.spring.maven.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;

@RestController
public class BasicRestController {

	@Autowired
	private EurekaClient client;
	@Autowired
	private RestTemplateBuilder restTemplateBuilder;  
	@RequestMapping("/")
	public String message() {
		final RestTemplate restTemplate = restTemplateBuilder.build();
		InstanceInfo instanceInfo = client.getNextServerFromEureka("SpringEurekaDiscoverApplicationService", false);
		return restTemplate.getForObject(instanceInfo.getHomePageUrl(), String.class);
	}
}
