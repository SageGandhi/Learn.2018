package edu.gandhi.prajit.spring.maven.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.gandhi.prajit.spring.maven.model.Event;

@RestController
public class EventsReportController {
	@RequestMapping("/events")
	public List<Event> getEvents() {
		return Arrays.asList(Event.builder().name("Java User Group"), Event.builder().name("Angular User Group"));
	}
}
