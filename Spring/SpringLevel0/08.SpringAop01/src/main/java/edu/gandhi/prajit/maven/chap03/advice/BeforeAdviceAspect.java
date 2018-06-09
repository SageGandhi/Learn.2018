package edu.gandhi.prajit.maven.chap03.advice;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class BeforeAdviceAspect {
	private Logger logger = LoggerFactory.getLogger(BeforeAdviceAspect.class);
	private boolean beforeCalled = false;

	public void reset() {
		beforeCalled = false;
	}

	public boolean isBeforeCalled() {
		return beforeCalled;
	}
	@Before("execution(* edu.gandhi.prajit.maven.chap03.service.SimpleService.doSomething())")
	public void tracing(JoinPoint joinPoint) {
		this.beforeCalled = true;
		logger.trace("Entering {},{}", joinPoint.getArgs(), joinPoint.getStaticPart().getSignature().toLongString());
	}
}
