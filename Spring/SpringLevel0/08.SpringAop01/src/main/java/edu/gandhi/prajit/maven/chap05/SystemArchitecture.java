package edu.gandhi.prajit.maven.chap05;

import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableAspectJAutoProxy
@Configuration
@ComponentScan(basePackages= {"edu.gandhi.prajit.maven.chap05"})
public class SystemArchitecture {
	@Pointcut("execution(* (@org.springframework.stereotype.Repository *).*(..))")
	public void Repository() {}
	@Pointcut("execution(* (@org.springframework.stereotype.Service *).*(..))")
	public void Service() {}
}
