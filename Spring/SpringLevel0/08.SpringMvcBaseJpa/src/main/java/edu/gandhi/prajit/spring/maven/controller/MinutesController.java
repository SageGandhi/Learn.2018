package edu.gandhi.prajit.spring.maven.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import edu.gandhi.prajit.spring.maven.model.Activity;
import edu.gandhi.prajit.spring.maven.model.Exercise;
import edu.gandhi.prajit.spring.maven.service.ExerciseService;

@Controller
public class MinutesController {
	@Autowired
	private ExerciseService exerciseService;

	@RequestMapping(value = "/addMinutes", method = RequestMethod.GET)
	public String getMinutes(@ModelAttribute("exercise") Exercise exercise) {
		return "addMinutes";
	}

	@RequestMapping(value = "/addMinutes", method = RequestMethod.POST)
	public String addMinutes(@Valid @ModelAttribute("exercise") Exercise exercise, BindingResult result) {
		System.out.println("Exercise: " + exercise.getMinutes());
		System.out.println("Exercise Activity: " + exercise.getActivity());
		if (result.hasErrors()) {
			return "addMinutes";
		}
		return "addMinutes";
	}

	@RequestMapping(value = "/activities", method = RequestMethod.GET)
	public @ResponseBody List<Activity> findAllActivities() {
		return exerciseService.findAllActivities();
	}
}
