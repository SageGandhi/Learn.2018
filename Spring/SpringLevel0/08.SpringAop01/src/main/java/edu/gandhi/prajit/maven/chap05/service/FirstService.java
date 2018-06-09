package edu.gandhi.prajit.maven.chap05.service;

import org.springframework.stereotype.Service;

@Service
public class FirstService {
	public void doIt() {}

	public void throwsException() {
		throw new RuntimeException();
	}
}
