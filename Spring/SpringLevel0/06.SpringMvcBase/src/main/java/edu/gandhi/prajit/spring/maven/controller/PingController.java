package edu.gandhi.prajit.spring.maven.controller;

import java.time.LocalDateTime;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PingController {
	/**
	 * http://localhost:8080/FitnessTracker/ping.html
	 * 
	 * @param model
	 *            Model To Send For Rendering
	 * @return View Name
	 */
	@RequestMapping("/ping")
	public String ping(Model model) {
		model.addAttribute("Time", LocalDateTime.now());
		System.out.println("PingController:ping:");
		return "pingSuccess";
	}
}
