package edu.gandhi.prajit.spring.maven.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import edu.gandhi.prajit.spring.maven.repository.CustomerRepository;
import edu.gandhi.prajit.spring.maven.service.model.Customer;

@Service("CustomerServiceImpl")
@Scope(scopeName=ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
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
	@Autowired
	public void setCustomerRepository(CustomerRepository customerRepository) {
		System.out.println("Will Be Used For Setter Injection:Method");
		this.customerRepository = customerRepository;
	}
}
