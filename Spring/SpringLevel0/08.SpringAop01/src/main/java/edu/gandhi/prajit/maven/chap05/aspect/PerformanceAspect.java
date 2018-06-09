package edu.gandhi.prajit.maven.chap05.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Component
@Aspect
public class PerformanceAspect extends CallTracker {
	Logger logger = LoggerFactory.getLogger(PerformanceAspect.class);

	@Around("edu.gandhi.prajit.maven.chap05.SystemArchitecture.Repository() || edu.gandhi.prajit.maven.chap05.SystemArchitecture.Service()")
	public void trace(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
		String methodInformation = proceedingJoinPoint.getStaticPart().getSignature().toString();
		StopWatch stopWatch = new StopWatch(methodInformation);
		stopWatch.start();
		trackCall();
		try {
			proceedingJoinPoint.proceed();
		} finally {
			stopWatch.stop();
			logger.trace(stopWatch.shortSummary());
		}
	}

}
