package edu.gandhi.prajit.maven.chap05.aspect;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ExceptionLoggingAspect extends CallTracker {
	private Logger logger = LoggerFactory.getLogger(ExceptionLoggingAspect.class);

	@AfterThrowing(throwing = "exception", pointcut = "edu.gandhi.prajit.maven.chap05.SystemArchitecture.Repository() || edu.gandhi.prajit.maven.chap05.SystemArchitecture.Service()")
	public void logException(Exception exception) {
		trackCall();
		logger.error("Exception {}", exception);
	}

}
