package edu.gandhi.prajit.maven.chap03.advice;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AfterAdviceAspect {
	private Logger logger = LoggerFactory.getLogger(AfterAdviceAspect.class);

	private boolean afterCalled = false;

	public void reset() {
		afterCalled = false;
	}

	public boolean isAfterCalled() {
		return afterCalled;
	}

	@After("execution(* edu.gandhi.prajit.maven.chap03.service.*.*(..))")
	public void exiting(JoinPoint joinPoint) {
		//Applied For Any Return Type Any Method In Package 
		afterCalled = true;
		logger.trace("Exiting {}", joinPoint.getSignature());
		for (Object arg : joinPoint.getArgs()) {
			logger.trace("Arg : {}", arg);
		}
	}
}
