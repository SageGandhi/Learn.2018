package edu.gandhi.prajit.maven.chap02.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class TracingAspect {
	private boolean enteringCalled = false;
	private org.slf4j.Logger logger = LoggerFactory.getLogger(TracingAspect.class);

	public boolean isEnteringCalled() {
		return enteringCalled;
	}

	@Before("execution(* *(..))")
	public void tracing(JoinPoint joinPoint) {
		this.enteringCalled = true;
		logger.trace("Entering {},{}", joinPoint.getArgs(), joinPoint.getStaticPart().getSignature().toLongString());
	}
}
