package edu.gandhi.prajit.maven.chap05.service;

import org.springframework.stereotype.Component;

@Component
public class TransactionViaAop {
	public void advicedMethod() {

	}

	public void callsTheAdvicedMethod() {
		//Local Calls Will Not Be Adviced
		advicedMethod();
	}

}
