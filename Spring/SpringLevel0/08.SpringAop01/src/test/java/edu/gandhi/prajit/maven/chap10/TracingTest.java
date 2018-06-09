package edu.gandhi.prajit.maven.chap10;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap10.service.SecondService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= {"/Chap10/System-Configuration.xml"})
public class TracingTest {
	@Autowired
	private SecondService secondService;
	@Test
	public void callService() {
		secondService.doSomething();
	}
}