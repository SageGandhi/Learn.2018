package edu.gandhi.prajit.spring.maven.service;

import java.util.List;

import edu.gandhi.prajit.spring.maven.service.model.Customer;

public interface CustomerService {

	List<Customer> findAll();

}
