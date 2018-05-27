package edu.gandhi.prajit.spring.maven.model;

public class Ride {
	private Integer id;
	private String name;
	private int duration;

	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
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
	 * @return the duration
	 */
	public int getDuration() {
		return duration;
	}

	/**
	 * @param duration
	 *            the duration to set
	 */
	public void setDuration(int duration) {
		this.duration = duration;
	}

	@Override
	public String toString() {
		return "Ride [" + (id != null ? "id=" + id + ", " : "") + (name != null ? "name=" + name + ", " : "")
				+ "duration=" + duration + "]";
	}

	public static Ride builder() {
		return new Ride();
	}

	public Ride duration(int duration) {
		setDuration(duration);
		return this;
	}

	public Ride name(String name) {
		setName(name);
		return this;
	}

	public Ride id(Integer id) {
		setId(id);
		return this;
	}
}
