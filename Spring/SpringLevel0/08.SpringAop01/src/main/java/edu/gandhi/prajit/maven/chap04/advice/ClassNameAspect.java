package edu.gandhi.prajit.maven.chap04.advice;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ClassNameAspect {
	private Logger logger = LoggerFactory.getLogger(ClassNameAspect.class);
	private int called = 0;
	@Around("execution(* edu.gandhi.prajit.maven.chap04..*Service.*(..))")
	public void trace(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		String methodInformation = proceedingJoinPoint.getSignature().toString();
		logger.trace("Entering {}", methodInformation);
		called++;
		try {
			proceedingJoinPoint.proceed();
		} catch (Throwable exThrowable) {
			logger.error("Exception In {},{}", methodInformation, exThrowable);
			throw exThrowable;
		} finally {
			logger.trace("Exiting {}", methodInformation);
		}
	}

	public void resetCalled() {
		called = 0;
	}

	public int getCalled() {
		return called;
	}
}
