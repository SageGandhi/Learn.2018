package edu.gandhi.prajit.maven.chap04;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap04.advice.SystemConfiguration;
import edu.gandhi.prajit.maven.chap04.advice.TraceAnnotationAspect;
import edu.gandhi.prajit.maven.chap04.repository.SimpleRepository;
import edu.gandhi.prajit.maven.chap04.service.SimpleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SystemConfiguration.class)
public class TraceAnnotationAspectTest {
	@Autowired
	private TraceAnnotationAspect traceAnnotationAspect;

	@Autowired
	private SimpleService simpleService;
	@Autowired
	private SimpleRepository simpleRepository;

	@Before
	public void setUp() {
		traceAnnotationAspect.resetCalled();
	}

	@Test
	public void tracingOnNotAnnotatedMethodIsNotCalled() {
		assertThat(traceAnnotationAspect.getCalled(), is(0));
		simpleService.doSomething();
		assertThat(traceAnnotationAspect.getCalled(), is(0));
	}

	@Test
	public void tracingOnAnnotatedMethodIsCalled() {
		assertThat(traceAnnotationAspect.getCalled(), is(0));
		simpleService.annotated();
		assertThat(traceAnnotationAspect.getCalled(), is(1));
	}

	@Test
	public void tracingOnAnnotatedClassMethodIsCalled() {
		assertThat(traceAnnotationAspect.getCalled(), is(0));
		simpleRepository.doSomething();
		assertThat(traceAnnotationAspect.getCalled(), is(1));
	}
	@Test
	public void tracingOnAnnotatedClassMethodElseIsCalled() {
		assertThat(traceAnnotationAspect.getCalled(), is(0));
		simpleRepository.doSomethingElse();
		assertThat(traceAnnotationAspect.getCalled(), is(1));
	}
}
