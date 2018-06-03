package edu.gandhi.prajit.spring.maven;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="Default.Specific")
public class ConfigClientAppConfiguration {
	private String firstNameProperty;
	private String lastNameProperty;
	/**
	 * @return the firstNameProperty
	 */
	public String getFirstNameProperty() {
		return firstNameProperty;
	}
	/**
	 * @param firstNameProperty the firstNameProperty to set
	 */
	public void setFirstNameProperty(String firstNameProperty) {
		this.firstNameProperty = firstNameProperty;
	}
	/**
	 * @return the lastNameProperty
	 */
	public String getLastNameProperty() {
		return lastNameProperty;
	}
	/**
	 * @param lastNameProperty the lastNameProperty to set
	 */
	public void setLastNameProperty(String lastNameProperty) {
		this.lastNameProperty = lastNameProperty;
	}
}
