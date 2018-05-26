package edu.gandhi.prajit.spring.maven;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import edu.gandhi.prajit.spring.maven.service.CustomerService;

public class ApplicationXml {
	public static void main(String[] args) {
		ApplicationContext appContext = new ClassPathXmlApplicationContext("ApplicationContext.xml");

		CustomerService service = appContext.getBean("CustomerServiceSetter", CustomerService.class);
		System.out.println(service.findAll());

		service = appContext.getBean("CustomerServiceId02", CustomerService.class);
		System.out.println(service.findAll());
		
		service = appContext.getBean("CustomerServiceConstructor", CustomerService.class);
		System.out.println(service.findAll());
		
		service = appContext.getBean("CustomerServiceId01", CustomerService.class);
		System.out.println(service.findAll());
		
		((ClassPathXmlApplicationContext) appContext).close();
	}
}
