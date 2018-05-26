package edu.gandhi.prajit.spring.maven;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import edu.gandhi.prajit.spring.maven.service.CustomerService;

public class ApplicationAnnotation {
	public static void main(String[] args) {
		ApplicationContext appContext = new AnnotationConfigApplicationContext(ApplicationConfiguration.class);

		CustomerService customerServiceSetter = appContext.getBean("CustomerServiceImpl", CustomerService.class);
		System.out.println(customerServiceSetter.findAll());
		
		System.out.println(appContext.getBean("CustomerServiceImpl", CustomerService.class));
		System.out.println(appContext.getBean("CustomerServiceImpl", CustomerService.class));

		((AnnotationConfigApplicationContext) appContext).close();
	}
}
