package edu.gandhi.prajit.maven.chap03;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap03.advice.AfterThrowingAdviceAspect;
import edu.gandhi.prajit.maven.chap03.config.AdviceConfiguration;
import edu.gandhi.prajit.maven.chap03.service.SimpleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = AdviceConfiguration.class)
public class AfterThrowingAdviceTest {
	@Autowired
	private AfterThrowingAdviceAspect afterThrowingAdvice;

	@Autowired
	private SimpleService simpleService;

	@Before
	public void rest() {
		afterThrowingAdvice.reset();
	}

	@Test
	public void afterThrowingIsNotCalledIfMethodReturnSuccessfully() {
		assertFalse(afterThrowingAdvice.isAfterThrowingCalled());
		simpleService.doSomething();
		assertFalse(afterThrowingAdvice.isAfterThrowingCalled());
	}

	@Test(expected = RuntimeException.class)
	public void afterThrowingIsCalledIfMethodThrowsRuntimeException() {
		//Only TypeSafe RuntimeException Will Use This Aspect
		assertFalse(afterThrowingAdvice.isAfterThrowingCalled());
		try {
			simpleService.throwsRuntimeException();
		} finally {
			assertTrue(afterThrowingAdvice.isAfterThrowingCalled());
		}
	}

	@Test(expected = Exception.class)
	public void afterThrowingIsNotCalledIfMethodThrowsException() throws Exception {
		assertFalse(afterThrowingAdvice.isAfterThrowingCalled());
		try {
			simpleService.throwsException();
		} finally {
			assertFalse(afterThrowingAdvice.isAfterThrowingCalled());
		}
	}
}
