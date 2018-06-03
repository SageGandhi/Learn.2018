package edu.gandhi.prajit.spring.maven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
/**
 * @EnableDiscoveryClient Commented As We Are Going To Use @RibbonClient
 * @author Prajit.Gandhi
 * 
 */
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
