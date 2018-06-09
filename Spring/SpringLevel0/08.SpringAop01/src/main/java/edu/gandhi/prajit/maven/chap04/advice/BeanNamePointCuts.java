package edu.gandhi.prajit.maven.chap04.advice;

import org.aspectj.lang.annotation.Pointcut;

public class BeanNamePointCuts {
	@Pointcut("bean(*Service)")
	//Must Not Be Abstract Class/Method
	public void serviceBeanPointCut() {}
}
