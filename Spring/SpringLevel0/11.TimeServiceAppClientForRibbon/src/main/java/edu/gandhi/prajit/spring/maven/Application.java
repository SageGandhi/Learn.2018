package edu.gandhi.prajit.spring.maven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.ribbon.RibbonClient;

import edu.gandhi.prajit.spring.config.ribbon.RibbonConfig;

@SpringBootApplication
/*@EnableDiscoveryClient*/
@RibbonClient(name="TimeServiceForRibbon",configuration=RibbonConfig.class)
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
