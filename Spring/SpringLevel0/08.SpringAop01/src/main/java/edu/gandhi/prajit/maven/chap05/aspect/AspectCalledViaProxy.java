package edu.gandhi.prajit.maven.chap05.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class AspectCalledViaProxy extends CallTracker {
	@Before("execution(* edu.gandhi.prajit.maven.chap05.service.TransactionViaAop.advicedMethod(..))")
	public void logException() {
		trackCall();
	}
}
