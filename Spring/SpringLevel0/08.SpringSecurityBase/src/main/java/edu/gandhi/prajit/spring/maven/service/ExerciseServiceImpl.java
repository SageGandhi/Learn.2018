package edu.gandhi.prajit.spring.maven.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import edu.gandhi.prajit.spring.maven.model.Activity;

@Service("exerciseService")
public class ExerciseServiceImpl implements ExerciseService {
	public List<Activity> findAllActivities() {
		return Arrays.asList(Activity.builder().desc("Run"), Activity.builder().desc("Bike"),
				Activity.builder().desc("Swim"));
	}
}
