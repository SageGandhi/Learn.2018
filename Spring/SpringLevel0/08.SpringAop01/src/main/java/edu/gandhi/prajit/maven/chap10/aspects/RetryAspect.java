package edu.gandhi.prajit.maven.chap10.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class RetryAspect {
	@Around("edu.gandhi.prajit.maven.chap10.SystemArchitecture.Repository()||edu.gandhi.prajit.maven.chap10.SystemArchitecture.Service()")
	public Object retry(ProceedingJoinPoint joinPoint) throws Throwable {
		try {
			return joinPoint.proceed();
		} catch (Throwable e) {
			return joinPoint.proceed();
		}
	}

}
