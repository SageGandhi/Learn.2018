package edu.gandhi.prajit.maven.chap02.aspect;

import org.springframework.stereotype.Service;

import edu.gandhi.prajit.maven.chap01.domain.Domain;

@Service
public class SimpleService {
	//Open Cross Reference
	public void serviceMethod01() {
		System.out.println("Invoked:SimpleService:serviceMethod01");
	}
	public Domain serviceMethod02(int value) {
		System.out.println("Invoked:SimpleService:serviceMethod02:"+value);
		return null;
	}
}
