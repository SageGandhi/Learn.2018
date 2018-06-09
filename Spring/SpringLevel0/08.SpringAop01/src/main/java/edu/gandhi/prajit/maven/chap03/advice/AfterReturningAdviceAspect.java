package edu.gandhi.prajit.maven.chap03.advice;

import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AfterReturningAdviceAspect {

	private Logger logger = LoggerFactory.getLogger(AfterReturningAdviceAspect.class);

	private boolean afterReturningCalled = false;

	public void reset() {
		afterReturningCalled = false;
	}

	public boolean isAfterReturningCalled() {
		return afterReturningCalled;
	}
	@AfterReturning(returning="returnValue",pointcut="execution(* edu.gandhi.prajit.maven.chap03.service.*.*(..))")
	public void logResult(String returnValue) {
		afterReturningCalled = true;
		logger.trace("Result {}",returnValue);
	}
}
