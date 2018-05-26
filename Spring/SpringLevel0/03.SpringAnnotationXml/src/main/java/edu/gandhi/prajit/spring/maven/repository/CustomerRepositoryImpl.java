package edu.gandhi.prajit.spring.maven.repository;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Repository;

import edu.gandhi.prajit.spring.maven.service.model.Customer;

@Repository("CustomerRepositoryImpl")
public class CustomerRepositoryImpl implements CustomerRepository {
	@Override
	public List<Customer> findAll() {
		return Arrays.asList(Customer.builder().firstName("Prajit").lastName("Gandhi"));
	}
}
