package edu.gandhi.prajit.spring.maven.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;

import edu.gandhi.prajit.spring.maven.repository.CustomerRepository;
import edu.gandhi.prajit.spring.maven.service.model.Customer;

public class CustomerServiceImpl implements CustomerService {
	@Value("${Developer.Name}")
	private String developerName;

	/**
	 * @return the developerName
	 */
	public String getDeveloperName() {
		return "Service:Loaded From Properties File:" + developerName;
	}

	private CustomerRepository customerRepository;

	public CustomerServiceImpl(CustomerRepository customerRepository) {
		System.out.println(getDeveloperName());
		System.out.println("Will Be Used For Constructor Injection");
		this.customerRepository = customerRepository;
	}

	public CustomerServiceImpl() {
		System.out.println(getDeveloperName());
		System.out.println("Will Be Used For Setter Injection");
	}

	@Override
	public List<Customer> findAll() {
		System.out.println(getDeveloperName());
		return customerRepository.findAll();
	}

	/**
	 * @param customerRepository
	 *            the customerRepository to set
	 */
	public void setCustomerRepository(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}
}
