package edu.gandhi.prajit.maven.chap10;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap10.service.SecondService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SystemConfiguration.class)
public class DataCaptureTest {
	@Autowired
	private SecondService secondService;

	@Test(expected = RuntimeException.class)
	public void test() {
		secondService.throwException();
		secondService.doThrowRuntimeException(-42);
	}
}
