package edu.gandhi.prajit.maven.chap01.test;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap01.config.SystemConfigurationMethods;
import edu.gandhi.prajit.maven.chap01.domain.Domain;
import edu.gandhi.prajit.maven.chap01.service.SimpleService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { SystemConfigurationMethods.class })
public class SystemConfigurationMethodsTest {
	@Autowired
	private SimpleService simpleService;

	@Test
	public void dependencyInjectionShouldWork() {
		assertNotNull(simpleService);
	}

	@Test
	public void serviceShouldReturnDomainObject() {
		assertThat(simpleService.service(), instanceOf(Domain.class));
	}
}
