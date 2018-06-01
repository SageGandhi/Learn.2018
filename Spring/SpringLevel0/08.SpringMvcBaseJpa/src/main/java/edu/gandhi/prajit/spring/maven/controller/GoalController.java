package edu.gandhi.prajit.spring.maven.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import edu.gandhi.prajit.spring.maven.model.Goal;

@Controller
@SessionAttributes("goal")
public class GoalController {
	@RequestMapping(value = "addGoal", method = RequestMethod.GET)
	public String addGoal(Model model) {
		model.addAttribute("goal", Goal.builder());
		return "addGoal";
	}

	@RequestMapping(value = "addGoal", method = RequestMethod.POST)
	public String updateGoal(@Valid @ModelAttribute("goal") Goal goal, BindingResult bindingResult) {
		System.out.println("Has Errors:" + bindingResult.hasErrors());
		if (bindingResult.hasErrors()) {
			return "addGoal";
		}
		System.out.println("Minutes Updated:GoalController:addGoal: " + goal);
		return "redirect:index.jsp";
	}
}
