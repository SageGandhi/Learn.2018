package edu.gandhi.prajit.maven.chap05.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class TracingAspect extends CallTracker {
	private Logger logger = LoggerFactory.getLogger(TracingAspect.class);

	@Around("edu.gandhi.prajit.maven.chap05.SystemArchitecture.Repository() || edu.gandhi.prajit.maven.chap05.SystemArchitecture.Service()")
	public void trace(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		String methodInformation = proceedingJoinPoint.getSignature().toString();
		logger.trace("Entering {}", methodInformation);
		trackCall();
		try {
			proceedingJoinPoint.proceed();
		} catch (Throwable exThrowable) {
			logger.error("Exception In {},{}", methodInformation, exThrowable);
			throw exThrowable;
		} finally {
			logger.trace("Exiting {}", methodInformation);
		}
	}
}
