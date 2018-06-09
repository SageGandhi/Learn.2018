package edu.gandhi.prajit.maven.chap11.aspects.sample;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class HibernateStateSynchronizerAspect {
	@Autowired
	private SessionFactory sessionFactory;
	@Before("execution(* org.springframework.jdbc.core.JdbcTemplate.*(..) )")
	public void flush() {
		if (sessionFactory != null) {
			Session session = sessionFactory.getCurrentSession();
			if (session != null && session.isDirty()) {
				session.flush();
			}
		}
	}
}
