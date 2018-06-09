package edu.gandhi.prajit.maven.chap04.service;

import org.springframework.stereotype.Service;

import edu.gandhi.prajit.maven.chap04.annotation.TraceAop;

@Service
public class SimpleService {
	public void doSomething() {
	}

	@TraceAop
	public void annotated() {
	}
}
