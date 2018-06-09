package edu.gandhi.prajit.maven.ctw;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class DemoAspect {
	static boolean called = false;

	@Before("execution(* edu.gandhi.prajit.maven.ctw.DemoClass.advicedMethod())")
	public void log() {
		System.out.println("Aspect Called!DemoAspect.log");
		called = true;
	}

	public static boolean isCalled() {
		return called;
	}

	public static void setCalled(boolean called) {
		DemoAspect.called = called;
	}

}
