package edu.gandhi.prajit.maven.chap02.test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap02.aspect.SimpleService;
import edu.gandhi.prajit.maven.chap02.aspect.TracingAspect;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/Chap02/Aspect.xml")
public class SimpleAspectXmlTest {
	@Autowired
	private TracingAspect tracingAspect;
	@Autowired
	private SimpleService simpleService;
	
	@Test
	public void aspectIsCalled() {
		assertFalse(tracingAspect.isEnteringCalled());
		simpleService.serviceMethod02(42);
		assertTrue(tracingAspect.isEnteringCalled());
	}
}
