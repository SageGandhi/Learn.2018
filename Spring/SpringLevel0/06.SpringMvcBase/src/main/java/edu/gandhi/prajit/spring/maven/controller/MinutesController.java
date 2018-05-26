package edu.gandhi.prajit.spring.maven.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import edu.gandhi.prajit.spring.maven.model.Activity;
import edu.gandhi.prajit.spring.maven.model.Excercise;

@Controller
public class MinutesController {
	/**
	 * http://localhost:8080/FitnessTracker/addMinutes.html
	 * 
	 * @param excercise
	 * @return View Name
	 */
	@RequestMapping("/addMinutes")
	public String addMinutes(@ModelAttribute("excercise") Excercise excercise) {
		System.out.println("MinutesController:addMinutes:" + excercise);
		// "redirect:addMoreMinutes.html";
		// Changed To addMoreMinutes.html Url By Browser
		// "forward:addMoreMinutes.html";//Changed Inside Container, Not In Browser
		return "addMinutes";
	}

	/**
	 * http://localhost:8080/FitnessTracker/addMoreMinutes.html
	 * 
	 * @param excercise
	 * @return View Name
	 */
	@RequestMapping("/addMoreMinutes")
	public String addMoreMinutes(@ModelAttribute("excercise") Excercise excercise) {
		System.out.println("MinutesController:addMoreMinutes:" + excercise);
		return "addMinutes";
	}

	@RequestMapping(value = "/activities", method = RequestMethod.GET)
	public @ResponseBody List<Activity> findAllActivities() {
		System.out.println("MinutesController:findAllActivities:");
		return Arrays.asList(Activity.builder().desc("Run"), Activity.builder().desc("Swim"));
	}
}
