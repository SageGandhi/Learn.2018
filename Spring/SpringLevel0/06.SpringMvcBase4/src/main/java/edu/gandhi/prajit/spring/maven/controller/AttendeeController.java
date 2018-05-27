package edu.gandhi.prajit.spring.maven.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import edu.gandhi.prajit.spring.maven.model.Attendee;

@Controller
public class AttendeeController {
	@RequestMapping(value = "/attendee", method = RequestMethod.GET)
	public String displayAttendeePage(Model model) {
		model.addAttribute("attendee", Attendee.builder());
		return "attendee";
	}

	@RequestMapping(value = "/attendee", method = RequestMethod.POST)
	public String processAttendee(@Valid Attendee attendee, BindingResult bindingResult,
			Model model) {
		System.out.println(attendee);
		if(bindingResult.hasErrors()) {
			return "attendee";
		}
		return "redirect:index.html";
	}
}
