package edu.gandhi.prajit.spring.maven.model;

public class Activity {
	private String desc;

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public static Activity builder() {
		return new Activity();
	}

	public Activity desc(String desc) {
		setDesc(desc);
		return this;
	}

	@Override
	public String toString() {
		return "Activity [" + (desc != null ? "desc=" + desc : "") + "]";
	}
}
