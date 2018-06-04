package edu.gandhi.prajit.spring.maven.controller;

import javax.validation.Valid;

import org.springframework.security.access.prepost.PreAuthorize;
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
		model.addAttribute("goal", Goal.builder().minutes(10));
		return "addGoal";
	}
	@PreAuthorize("hasRole('ROLE_ADMIN') and hasPermission(#goal,'createGoal')")
	@RequestMapping(value = "addGoal", method = RequestMethod.POST)
	public String updateGoal(@Valid @ModelAttribute("goal") Goal goal, BindingResult result) {
		//Http Status 405 If Role Is Not Role_Admin 
		System.out.println("Result Has Errors: " + result.hasErrors());
		System.out.println("Goal Set: " + goal.getMinutes());
		if (result.hasErrors()) {
			return "addGoal";
		}
		return "redirect:index.jsp";
	}
}
