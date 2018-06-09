package edu.gandhi.prajit.maven.chap12.aspects.circuit.breaker;

import java.util.concurrent.atomic.AtomicInteger;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Aspect("perthis(edu.gandhi.prajit.maven.chap12.aspects.circuit.breaker.CircuitBreakerAspect.circuitBreakerMethods())")
public class CircuitBreakerAspect {
	@Pointcut("execution(@edu.gandhi.prajit.maven.chap12.aspects.circuit.breaker.CircuitBreaker * *(..))")
	public void circuitBreakerMethods() {}
	private AtomicInteger counter = new AtomicInteger();
	private Throwable throwable;
	@Around("edu.gandhi.prajit.maven.chap12.aspects.circuit.breaker.CircuitBreakerAspect.circuitBreakerMethods()")
	public Object retry(ProceedingJoinPoint joinPoint) throws Throwable {
		try {
			if (counter.get() == 0) {//First Time After Each 10 Time Proceed * Throw Exception
				return joinPoint.proceed();
			}
			if (counter.incrementAndGet() == 10) {//Until Tried 10 Times
				Object result = joinPoint.proceed();
				counter.set(0);
				return result;
			}
		} catch (Throwable throwable) {
			this.throwable = throwable;
			counter.set(1);
		}
		throw this.throwable;
	}
}
