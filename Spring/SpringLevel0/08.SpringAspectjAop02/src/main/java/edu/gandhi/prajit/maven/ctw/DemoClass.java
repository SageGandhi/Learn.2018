package edu.gandhi.prajit.maven.ctw;

public class DemoClass {
	public void advicedMethod() {
		System.out.println("Aspect Called!DemoClass.advicedMethod");
	}

	public void callsTheAdvicedMethohd() {
		System.out.println("Aspect Called!DemoClass.callsTheAdvicedMethohd");
		advicedMethod();
	}
	
}
