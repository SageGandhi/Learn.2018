package edu.gandhi.prajit.spring.maven;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import edu.gandhi.prajit.spring.maven.service.CustomerService;

public class ApplicationAnnotation {
	public static void main(String[] args) {
		ApplicationContext appContext = new AnnotationConfigApplicationContext(ApplicationConfiguration.class);

		CustomerService customerServiceSetter = appContext.getBean("CustomerServiceSetter", CustomerService.class);
		System.out.println(customerServiceSetter.findAll());

		CustomerService customerServiceConstructor = appContext.getBean("CustomerServiceConstructor",
				CustomerService.class);
		System.out.println(customerServiceConstructor.findAll());

		((AnnotationConfigApplicationContext) appContext).close();
	}
}
