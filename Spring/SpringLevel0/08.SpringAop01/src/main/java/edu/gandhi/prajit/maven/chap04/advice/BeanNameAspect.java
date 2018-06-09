package edu.gandhi.prajit.maven.chap04.advice;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class BeanNameAspect {
	private Logger logger = LoggerFactory.getLogger(BeanNameAspect.class);
	private int called = 0;
	@Around("edu.gandhi.prajit.maven.chap04.advice.BeanNamePointCuts.serviceBeanPointCut()")
	public void traceMethod(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		String methodInformation = proceedingJoinPoint.getStaticPart().getSignature().getName();
		logger.trace("Entering {}", methodInformation);
		called++;
		try {
			proceedingJoinPoint.proceed();
		} catch (Throwable ex) {
			logger.error("Exception {} {}", methodInformation, ex);
			throw ex;
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
