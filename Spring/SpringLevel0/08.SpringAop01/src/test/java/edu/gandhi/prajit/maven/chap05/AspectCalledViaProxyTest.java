package edu.gandhi.prajit.maven.chap05;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.aop.aspectj.annotation.AspectJProxyFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import edu.gandhi.prajit.maven.chap05.aspect.AspectCalledViaProxy;
import edu.gandhi.prajit.maven.chap05.service.TransactionViaAop;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { SystemArchitecture.class })
public class AspectCalledViaProxyTest {
	@Autowired
	private AspectCalledViaProxy aspectCalledViaProxy;

	@Autowired
	private TransactionViaAop transactionViaAop;

	@Before
	public void setUp() {
		aspectCalledViaProxy.resetCalled();
	}

	@Test
	public void directCallToAdvicedMethodIsTraced() {
		assertFalse(aspectCalledViaProxy.isCalled());
		transactionViaAop.advicedMethod();
		assertTrue(aspectCalledViaProxy.isCalled());
	}

	@Test
	public void indirectCallToAdvicedMethodIsNotTraced() {
		assertFalse(aspectCalledViaProxy.isCalled());
		// Local Invocation
		transactionViaAop.callsTheAdvicedMethod();
		assertFalse(aspectCalledViaProxy.isCalled());
	}

	@Test
	public void addAdvicePromattically() {
		final AspectCalledViaProxy adviceToApply= new AspectCalledViaProxy();
		final TransactionViaAop target = new TransactionViaAop();
		
		final AspectJProxyFactory aspectJProxyFactory = new AspectJProxyFactory(target);
		aspectJProxyFactory.addAspect(adviceToApply);
		
		final TransactionViaAop proxy = aspectJProxyFactory.<TransactionViaAop>getProxy();
	
		assertFalse(adviceToApply.isCalled());
		proxy.advicedMethod();
		assertTrue(adviceToApply.isCalled());
	}
}
