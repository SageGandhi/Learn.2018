package edu.gandhi.prajit.maven.chap01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.gandhi.prajit.maven.chap01.domain.Domain;
import edu.gandhi.prajit.maven.chap01.repository.SimpleRepository;

@Service
public class SimpleService {
	@Autowired
	private SimpleRepository simpleRepository;

	public Domain service() {
		return simpleRepository.findDomain();
	}
}
