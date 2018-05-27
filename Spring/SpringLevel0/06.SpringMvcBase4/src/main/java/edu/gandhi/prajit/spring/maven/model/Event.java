package edu.gandhi.prajit.spring.maven.model;

public class Event {
	private String name;

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	@Override
	public String toString() {
		return "Event [" + (name != null ? "name=" + name : "") + "]";
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * 
	 * @return
	 */
	public static Event builder() {
		return new Event();
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public Event name(String name) {
		setName(name);
		return this;
	}
}
