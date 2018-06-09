package edu.gandhi.prajit.maven.chap12.service;

import org.springframework.stereotype.Service;

import edu.gandhi.prajit.maven.chap12.aspects.circuit.breaker.CircuitBreaker;

@Service
public class CircuitBreakerService01 implements CircuitBreakerService {
	private int counter = 0;

	@Override
	@CircuitBreaker
	public void errorMethod() {
		counter++;
		if (counter < 2) {
			throw new RuntimeException("Counter Is Too Low:" + CircuitBreakerService01.class.getName()+":"+counter);
		}
	}
}
