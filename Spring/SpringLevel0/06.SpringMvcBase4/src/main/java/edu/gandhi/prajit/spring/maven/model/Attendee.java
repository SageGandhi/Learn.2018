package edu.gandhi.prajit.spring.maven.model;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import edu.gandhi.prajit.spring.maven.validator.custom.Phone;

public class Attendee {
	@Size(min = 5, max = 50)
	private String name;
	@NotEmpty
	@Email
	private String emailAddress;
	@Phone
	private String phone;

	@Override
	public String toString() {
		return "Attendee [" + (name != null ? "name=" + name + ", " : "")
				+ (emailAddress != null ? "emailAddress=" + emailAddress + ", " : "")
				+ (phone != null ? "phone=" + phone : "") + "]";
	}

	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * @param phone
	 *            the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the emailAddress
	 */
	public String getEmailAddress() {
		return emailAddress;
	}

	/**
	 * @param emailAddress
	 *            the emailAddress to set
	 */
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	/**
	 * 
	 * @return
	 */
	public static Attendee builder() {
		return new Attendee();
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public Attendee name(String name) {
		setName(name);
		return this;
	}

	/**
	 * @param emailAddress
	 *            the emailAddress to set
	 */
	public Attendee emailAddress(String emailAddress) {
		setEmailAddress(emailAddress);
		return this;
	}
}
