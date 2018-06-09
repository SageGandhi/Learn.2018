package edu.gandhi.prajit.maven.chap10.aspects.ffdc;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class FirstFailureDataCaptureAspect {
	private ThreadLocal<CallContext> callContext = new ThreadLocal<CallContext>();

	private CallContext getCallContext() {
		CallContext result = callContext.get();
		if (result == null) {
			callContext.set(new CallContext());
			result = callContext.get();
		}
		return result;
	}

	@AfterThrowing(value = "edu.gandhi.prajit.maven.chap10.SystemArchitecture.Service()", throwing = "throwable")
	public void afterThrowing(Throwable throwable) {
		getCallContext().afterThrowing(throwable);
	}

	@Before("edu.gandhi.prajit.maven.chap10.SystemArchitecture.Service()")
	public void before(JoinPoint joinPoint) {
		getCallContext().before(joinPoint);
	}

	@AfterReturning(pointcut="edu.gandhi.prajit.maven.chap10.SystemArchitecture.Service()", returning="result")
	public void afterReturning(Object result) {
		getCallContext().afterReturning(result);
	}

}
