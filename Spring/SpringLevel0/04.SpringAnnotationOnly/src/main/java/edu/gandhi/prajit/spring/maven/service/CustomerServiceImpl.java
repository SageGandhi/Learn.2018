package edu.gandhi.prajit.spring.maven.service;

import java.util.List;

import edu.gandhi.prajit.spring.maven.repository.CustomerRepository;
import edu.gandhi.prajit.spring.maven.service.model.Customer;

public class CustomerServiceImpl implements CustomerService {
	private CustomerRepository customerRepository;
	public CustomerServiceImpl(CustomerRepository customerRepository) {
		System.out.println("Will Be Used For Constructor Injection");
		this.customerRepository = customerRepository;
	}

	public CustomerServiceImpl() {
		System.out.println("Will Be Used For Setter Injection:Constructor");
	}

	@Override
	public List<Customer> findAll() {
		return customerRepository.findAll();
	}

	/**
	 * @param customerRepository
	 *            the customerRepository to set
	 */
	public void setCustomerRepository(CustomerRepository customerRepository) {
		System.out.println("Will Be Used For Setter Injection:Method");
		this.customerRepository = customerRepository;
	}
}
