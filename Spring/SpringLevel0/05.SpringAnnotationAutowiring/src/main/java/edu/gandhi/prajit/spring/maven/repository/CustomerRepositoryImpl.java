package edu.gandhi.prajit.spring.maven.repository;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import edu.gandhi.prajit.spring.maven.service.model.Customer;

@Repository("CustomerRepositoryImpl")
@Scope(scopeName = ConfigurableBeanFactory.SCOPE_SINGLETON)
public class CustomerRepositoryImpl implements CustomerRepository {
	@Value("${Developer.Name}")
	private String developerName;

	/**
	 * @return the developerName
	 */
	public String getDeveloperName() {
		return "@Repository:Loaded From Properties File:" + developerName;
	}

	@Override
	public List<Customer> findAll() {
		System.out.println(getDeveloperName());
		return Arrays.asList(Customer.builder().firstName("Prajit").lastName("Gandhi"));
	}
}
