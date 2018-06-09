package edu.gandhi.prajit.maven.chap03;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap03.advice.BeforeAdviceAspect;
import edu.gandhi.prajit.maven.chap03.config.AdviceConfiguration;
import edu.gandhi.prajit.maven.chap03.service.SimpleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { AdviceConfiguration.class })
public class BeforeAdviceTest {
	@Autowired
	private BeforeAdviceAspect beforeAspect;

	@Autowired
	private SimpleService simpleService;

	@Before
	public void reset() {
		beforeAspect.reset();
	}

	@Test
	public void beforeIsCalledIfCorrectMethodIsCalled() {
		assertFalse(beforeAspect.isBeforeCalled());
		simpleService.doSomething();//This Method Is Under PointCut
		assertTrue(beforeAspect.isBeforeCalled());
	}

	@Test
	public void beforeIsNotCalledIfDifferentMethodIsCalled() {
		assertFalse(beforeAspect.isBeforeCalled());
		simpleService.returnsString();//This Method Is Not Under PointCut
		assertFalse(beforeAspect.isBeforeCalled());
	}

}
