package edu.gandhi.prajit.maven.chap11.aspects.sample;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class JpaStateSynchronizerAspect {
	@PersistenceContext
	private EntityManager entityManager;

	@Before("execution(* org.springframework.jdbc.core.JdbcTemplate.*(..) )")
	public void flush() {
		if (entityManager != null) {
			entityManager.flush();
		}
	}
}
