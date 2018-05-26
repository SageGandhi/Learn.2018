package edu.gandhi.prajit.spring.maven.model;

import org.hibernate.validator.constraints.Range;

public class Goal {
	@Range(min = 1, max = 120)
	private int minutes;

	/**
	 * @return the minutes
	 */
	public int getMinutes() {
		return minutes;
	}

	/**
	 * @param minutes
	 *            the minutes to set
	 */
	public void setMinutes(int minutes) {
		this.minutes = minutes;
	}

	@Override
	public String toString() {
		return "Excercise [minutes=" + minutes + "]";
	}

	public static Goal builder() {
		return new Goal();
	}

	public Goal minutes(int minutes) {
		setMinutes(minutes);
		return this;
	}
}
