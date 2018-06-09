package edu.gandhi.prajit.maven.chap05;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap05.aspect.PerformanceAspect;
import edu.gandhi.prajit.maven.chap05.repository.FirstRepository;
import edu.gandhi.prajit.maven.chap05.service.FirstService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { SystemArchitecture.class })
public class PerformanceAspectTest {
	@Autowired
	private PerformanceAspect performanceAspect;

	@Autowired
	private FirstService firstService;

	@Autowired
	private FirstRepository firstRepository;

	@Before
	public void setUp() {
		performanceAspect.resetCalled();
	}

	@Test
	public void performanceIsCalledForRepositories() {
		assertFalse(performanceAspect.isCalled());
		firstRepository.doIt();
		assertTrue(performanceAspect.isCalled());
	}

	@Test
	public void performanceIsNotCalledForServices() {
		assertFalse(performanceAspect.isCalled());
		firstService.doIt();
		assertTrue(performanceAspect.isCalled());
	}

}
