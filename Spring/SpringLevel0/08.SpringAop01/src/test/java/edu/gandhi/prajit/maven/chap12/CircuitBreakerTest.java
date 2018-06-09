package edu.gandhi.prajit.maven.chap12;

import static org.junit.Assert.fail;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap12.config.SystemConfiguration;
import edu.gandhi.prajit.maven.chap12.service.CircuitBreakerService;
import edu.gandhi.prajit.maven.chap12.service.CircuitBreakerService01;
import edu.gandhi.prajit.maven.chap12.service.CircuitBreakerService02;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SystemConfiguration.class)
public class CircuitBreakerTest {
	@Autowired
	private CircuitBreakerService01 circuitBreakerService01;

	@Autowired
	private CircuitBreakerService02 circuitBreakerService02;

	@Test
	public void testErrorService02() {
		methodShouldExecuteWithoutExceptionAfter10Tries(circuitBreakerService02);
	}

	@Test
	public void testErrorService01() {
		methodShouldExecuteWithoutExceptionAfter10Tries(circuitBreakerService01);
	}

	public void methodShouldExecuteWithoutExceptionAfter10Tries(CircuitBreakerService service) {
		for (int indexLoop = 0; indexLoop < 9; indexLoop++) {
			try {
				service.errorMethod();
				fail("Expected Failure In Iteration " + indexLoop + " !");
			} catch (RuntimeException runtimeException) {
				System.out.println(runtimeException.getMessage());
			}
		}
		service.errorMethod();
	}

}
