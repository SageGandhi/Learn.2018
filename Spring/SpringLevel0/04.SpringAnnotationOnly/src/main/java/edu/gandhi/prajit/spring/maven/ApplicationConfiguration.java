package edu.gandhi.prajit.spring.maven;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import edu.gandhi.prajit.spring.maven.repository.CustomerRepository;
import edu.gandhi.prajit.spring.maven.repository.CustomerRepositoryImpl;
import edu.gandhi.prajit.spring.maven.service.CustomerService;
import edu.gandhi.prajit.spring.maven.service.CustomerServiceImpl;

@Configuration
public class ApplicationConfiguration {
	@Bean(name = "CustomerRepository")
	public CustomerRepository customerRepository() {
		return new CustomerRepositoryImpl();
	}

	@Bean(name = "CustomerServiceSetter")
	public CustomerService customerServiceSetter() {
		CustomerServiceImpl customerService = new CustomerServiceImpl();
		customerService.setCustomerRepository(customerRepository());
		return customerService;
	}

	@Bean(name = "CustomerServiceConstructor")
	public CustomerService customerServiceConstructor() {
		return new CustomerServiceImpl(customerRepository());
	}
}
