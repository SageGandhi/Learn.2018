package edu.gandhi.prajit.maven.chap03.advice;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AfterThrowingAdviceAspect {
	private Logger logger = LoggerFactory.getLogger(AfterThrowingAdviceAspect.class);
	private boolean afterThrowingCalled = false;

	public void reset() {
		afterThrowingCalled = false;
	}

	public boolean isAfterThrowingCalled() {
		return afterThrowingCalled;
	}

	@AfterThrowing(pointcut = "execution(* edu.gandhi.prajit.maven.chap03.service.*.*(..))", throwing = "exception")
	public void logException(RuntimeException exception) {
		afterThrowingCalled = true;
		logger.error("Exception {}", exception);
	}

}
