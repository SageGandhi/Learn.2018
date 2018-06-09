package edu.gandhi.prajit.maven.ctw;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class CtwAspectTest {
	@Test
	public void callsTheAdvicedMethohd() {
		assertFalse(DemoAspect.isCalled());
		new DemoClass().callsTheAdvicedMethohd();
		assertTrue(DemoAspect.isCalled());
	}
}
