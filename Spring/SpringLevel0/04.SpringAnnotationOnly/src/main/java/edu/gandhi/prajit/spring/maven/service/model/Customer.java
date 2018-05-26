package edu.gandhi.prajit.spring.maven.service.model;

public class Customer {
	private String firstName;
	private String lastName;

	public static Customer builder() {
		return new Customer();
	}
	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * @param firstName
	 *            the firstName to set
	 */
	public Customer firstName(String firstName) {
		setFirstName(firstName);
		return this;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName
	 *            the lastName to set
	 */
	public Customer lastName(String lastName) {
		setLastName(lastName);
		return this;
	}
	
	@Override
	public String toString() {
		return "Customer [" + (firstName != null ? "firstName=" + firstName + ", " : "")
				+ (lastName != null ? "lastName=" + lastName : "") + "]";
	}
}
