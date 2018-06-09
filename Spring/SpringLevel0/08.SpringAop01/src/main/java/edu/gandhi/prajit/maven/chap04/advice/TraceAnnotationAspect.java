package edu.gandhi.prajit.maven.chap04.advice;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class TraceAnnotationAspect {
	private Logger logger = LoggerFactory.getLogger(TraceAnnotationAspect.class);
	private int called = 0;

	// Applied On Method Annotated With
	// edu.gandhi.prajit.maven.chap04.annotation.TraceAop
	@Around("execution(@edu.gandhi.prajit.maven.chap04.annotation.TraceAop * *(..))")
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

	// Applied On All Method Where Class Is Annotated With
	// edu.gandhi.prajit.maven.chap04.annotation.TraceAop
	@Around("execution(* (@edu.gandhi.prajit.maven.chap04.annotation.TraceAop edu.gandhi.prajit.maven.chap04..*).*(..))")
	public void traceClass(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
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
