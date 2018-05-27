package edu.gandhi.prajit.spring.maven.model;

public class ServiceError {
	private int code;
	private String message;

	public static ServiceError builder() {
		return new ServiceError();
	}

	@Override
	public String toString() {
		return "ServiceError [code=" + code + ", " + (message != null ? "message=" + message : "") + "]";
	}

	/**
	 * @return the code
	 */
	public int getCode() {
		return code;
	}

	/**
	 * @param code the code to set
	 */
	public void setCode(int code) {
		this.code = code;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}
	
	/**
	 * @param code the code to set
	 */
	public ServiceError code(int code) {
		setCode(code);
		return this;
	}

	/**
	 * @param message the message to set
	 */
	public ServiceError message(String message) {
		setMessage(message);
		return this;
	}
}
