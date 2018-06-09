package edu.gandhi.prajit.maven.chap04;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap04.advice.BeanNameAspect;
import edu.gandhi.prajit.maven.chap04.advice.SystemConfiguration;
import edu.gandhi.prajit.maven.chap04.repository.SimpleRepository;
import edu.gandhi.prajit.maven.chap04.service.SimpleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SystemConfiguration.class)
public class BeanNameAspectTest {
	@Autowired
	private BeanNameAspect beanNameAspect;

	@Autowired
	private SimpleService simpleService;

	@Autowired
	private SimpleRepository simpleRepository;

	@Before
	public void setUp() {
		beanNameAspect.resetCalled();
	}

	@Test
	public void tracingOnServiceIsCalled() {
		assertThat(beanNameAspect.getCalled(), is(0));
		simpleService.doSomething();
		assertThat(beanNameAspect.getCalled(), is(1));
	}

	@Test
	public void tracingOnRepsositoryIsNotCalled() {
		assertThat(beanNameAspect.getCalled(), is(0));
		simpleRepository.doSomething();
		assertThat(beanNameAspect.getCalled(), is(0));
	}
}
