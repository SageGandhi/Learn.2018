package edu.gandhi.prajit.spring.maven.repository;

import java.util.Arrays;
import java.util.List;

import edu.gandhi.prajit.spring.maven.service.model.Customer;

public class CustomerRepositoryImpl implements CustomerRepository {
	private String developerName;

	@Override
	public List<Customer> findAll() {
		System.out.println(getDeveloperName());
		return Arrays.asList(Customer.builder().firstName("Prajit").lastName("Gandhi"));
	}

	/**
	 * @return the developerName
	 */
	public String getDeveloperName() {
		return "Repository:Loaded From Properties File:"+developerName;
	}

	/**
	 * @param developerName the developerName to set
	 */
	public void setDeveloperName(String developerName) {
		this.developerName = developerName;
	}

}
