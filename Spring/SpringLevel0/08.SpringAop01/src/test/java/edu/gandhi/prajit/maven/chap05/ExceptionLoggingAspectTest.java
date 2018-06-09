package edu.gandhi.prajit.maven.chap05;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap05.aspect.ExceptionLoggingAspect;
import edu.gandhi.prajit.maven.chap05.repository.FirstRepository;
import edu.gandhi.prajit.maven.chap05.service.FirstService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { SystemArchitecture.class })
public class ExceptionLoggingAspectTest {

	@Autowired
	private ExceptionLoggingAspect exceptionLoggingAspect;

	@Autowired
	private FirstService firstService;

	@Autowired
	private FirstRepository firstRepository;

	@Before
	public void setUp() {
		exceptionLoggingAspect.resetCalled();
	}

	@Test
	public void exceptionLoggingIsNotCalledIfNoExceptionIsThrown() {
		assertFalse(exceptionLoggingAspect.isCalled());
		firstRepository.doIt();
		assertFalse(exceptionLoggingAspect.isCalled());
	}

	@Test(expected = RuntimeException.class)
	public void exceptionLoggingIsCalledIfExceptionIsThrown() {
		assertFalse(exceptionLoggingAspect.isCalled());
		try {
			firstRepository.throwsException();
		} finally {
			assertTrue(exceptionLoggingAspect.isCalled());
		}
	}
	@Test
	public void exceptionLoggingIsNotCalledIfNoExceptionIsThrownService() {
		assertFalse(exceptionLoggingAspect.isCalled());
		firstService.doIt();
		assertFalse(exceptionLoggingAspect.isCalled());
	}

	@Test(expected = RuntimeException.class)
	public void exceptionLoggingIsCalledIfExceptionIsThrownService() {
		assertFalse(exceptionLoggingAspect.isCalled());
		try {
			firstService.throwsException();
		} finally {
			assertTrue(exceptionLoggingAspect.isCalled());
		}
	}
}
