package edu.gandhi.prajit.maven.chap05.repository;

import org.springframework.stereotype.Repository;

@Repository
public class FirstRepository {
	public void doIt() {}

	public void throwsException() {
		throw new RuntimeException();
	}
}
