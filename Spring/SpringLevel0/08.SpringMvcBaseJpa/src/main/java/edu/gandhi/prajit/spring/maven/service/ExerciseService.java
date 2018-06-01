package edu.gandhi.prajit.spring.maven.service;

import java.util.List;

import edu.gandhi.prajit.spring.maven.model.Activity;

public interface ExerciseService {

	List<Activity> findAllActivities();

}