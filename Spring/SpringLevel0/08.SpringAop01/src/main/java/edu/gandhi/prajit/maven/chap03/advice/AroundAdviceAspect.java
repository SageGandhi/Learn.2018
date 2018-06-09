package edu.gandhi.prajit.maven.chap03.advice;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AroundAdviceAspect {
	private Logger logger = LoggerFactory.getLogger(AroundAdviceAspect.class);
	private boolean called;

	public void reset() {
		called = false;
	}

	@Around("execution(* edu.gandhi.prajit.maven.chap03.service.*.*(..))")
	public Object trace(ProceedingJoinPoint proceedingJP) throws Throwable {
		String methodInformation = proceedingJP.getStaticPart().getSignature().toString();
		logger.trace("Entering {}", methodInformation);
		called = true;
		try {
			return proceedingJP.proceed();
		} catch (Throwable exThrowable) {
			logger.error("Exception In {},{}", methodInformation, exThrowable);
			throw exThrowable;
		} finally {
			logger.trace("Exiting {}", methodInformation);
		}
	}

	public boolean isCalled() {
		return called;
	}

}
