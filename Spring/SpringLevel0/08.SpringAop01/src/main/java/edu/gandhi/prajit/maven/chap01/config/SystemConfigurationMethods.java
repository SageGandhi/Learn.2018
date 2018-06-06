package edu.gandhi.prajit.maven.chap01.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import edu.gandhi.prajit.maven.chap01.repository.SimpleRepository;
import edu.gandhi.prajit.maven.chap01.service.SimpleService;

@Configuration
public class SystemConfigurationMethods {
	@Bean
	public SimpleService simpleService() {
		return new SimpleService();
	}

	@Bean
	public SimpleRepository simpleRepository() {
		return new SimpleRepository();
	}
}
