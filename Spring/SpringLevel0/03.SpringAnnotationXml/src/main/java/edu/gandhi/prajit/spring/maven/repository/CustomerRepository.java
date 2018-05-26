package edu.gandhi.prajit.spring.maven.repository;

import java.util.List;

import edu.gandhi.prajit.spring.maven.service.model.Customer;

public interface CustomerRepository {
	List<Customer> findAll();
}
