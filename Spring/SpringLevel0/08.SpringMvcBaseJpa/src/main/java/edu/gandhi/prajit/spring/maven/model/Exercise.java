package edu.gandhi.prajit.spring.maven.model;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Range;

public class Exercise {
	@Range(min = 1, max = 120)
	private int minutes;
	@NotNull
	private String activity;

	/**
	 * @return the activity
	 */
	public String getActivity() {
		return activity;
	}

	/**
	 * @param activity
	 *            the activity to set
	 */
	public void setActivity(String activity) {
		this.activity = activity;
	}

	public Exercise activity(String activity) {
		setActivity(activity);
		return this;
	}

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
		return "Excercise [minutes=" + minutes + ", " + (activity != null ? "activity=" + activity : "") + "]";
	}

	public static Exercise builder() {
		return new Exercise();
	}

	public Exercise minutes(int minutes) {
		setMinutes(minutes);
		return this;
	}
}
