package edu.gandhi.prajit.maven.chap10.service;

import org.springframework.stereotype.Service;

@Service
public class SecondService {
	private boolean throwException = true;
	public void doSomething() {}

	public void throwException() {
		if (throwException) {
			System.out.println("RuntimeException");
			throwException = false;
			throw new RuntimeException();
		} else {
			System.out.println("No RuntimeException");
			throwException = true;
		}
	}
	public int doThrowRuntimeException(int input) {
		if(input<0) {
			throw new RuntimeException("Foribly Throwing RuntimeException");
		}
		return input;		
	}
}
