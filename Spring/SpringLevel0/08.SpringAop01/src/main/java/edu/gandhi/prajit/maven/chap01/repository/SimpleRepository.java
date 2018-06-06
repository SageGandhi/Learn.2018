package edu.gandhi.prajit.maven.chap01.repository;

import org.springframework.stereotype.Repository;

import edu.gandhi.prajit.maven.chap01.domain.Domain;

@Repository
public class SimpleRepository {
	public Domain findDomain() {
		return new Domain();
	}
}
