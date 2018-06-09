package edu.gandhi.prajit.maven.chap04.repository;

import org.springframework.stereotype.Repository;

import edu.gandhi.prajit.maven.chap04.annotation.TraceAop;

@Repository
@TraceAop
public class SimpleRepository {
	public void doSomething() {

	}
	public void doSomethingElse() {

	}
}
