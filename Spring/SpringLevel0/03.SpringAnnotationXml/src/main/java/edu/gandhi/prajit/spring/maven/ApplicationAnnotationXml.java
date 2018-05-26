package edu.gandhi.prajit.spring.maven;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import edu.gandhi.prajit.spring.maven.service.CustomerService;

public class ApplicationAnnotationXml {
	public static void main(String[] args) {
		ApplicationContext appContext = new ClassPathXmlApplicationContext("ApplicationContext.xml");

		CustomerService service = appContext.getBean("CustomerServiceImpl", CustomerService.class);
		System.out.println(service.findAll());

		((ClassPathXmlApplicationContext) appContext).close();
	}
}
