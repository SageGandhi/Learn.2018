package edu.gandhi.prajit.spring.maven;

import org.springframework.boot.SpringApplication;

public class Application {
	// Spring Boot Application Will Not Do Mvn Install Without start-class In
	// Pom,Which Contains Main Method
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
