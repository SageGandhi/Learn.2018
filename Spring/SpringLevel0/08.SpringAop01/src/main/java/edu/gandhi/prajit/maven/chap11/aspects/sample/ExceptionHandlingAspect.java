package edu.gandhi.prajit.maven.chap11.aspects.sample;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ExceptionHandlingAspect {
	private Logger logger = LoggerFactory.getLogger(ExceptionHandlingAspect.class);
	@AfterThrowing(pointcut = "edu.gandhi.prajit.maven.chap10.SystemArchitecture.Repository()", throwing = "dataAccessException")
	public void logDataAccessException(DataAccessException dataAccessException) {
		logger.error("Problem In Repositories:{}", dataAccessException);
	}

	@AfterThrowing(pointcut = "edu.gandhi.prajit.maven.chap10.SystemArchitecture.Service()", throwing = "runtimeException")
	public void logRuntimeException(RuntimeException runtimeException) {
		logger.error("RuntimeException In Service:{}", runtimeException);
	}
}
