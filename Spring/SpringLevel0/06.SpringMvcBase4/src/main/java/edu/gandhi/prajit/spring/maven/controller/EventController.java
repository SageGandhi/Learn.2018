package edu.gandhi.prajit.spring.maven.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import edu.gandhi.prajit.spring.maven.model.Event;

@Controller
@SessionAttributes("event")
public class EventController {
	@RequestMapping(value = "/event", method = RequestMethod.GET)
	public String displayEventPage(Model model) {
		model.addAttribute("event", Event.builder().name("Java User Group"));
		return "event";
	}
	@RequestMapping(value="/event", method = RequestMethod.POST)
	public String processEvent(@ModelAttribute("event") Event event) {
		System.out.println(event);
		return "redirect:index.html";
	}
}
