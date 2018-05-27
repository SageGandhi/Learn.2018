package edu.gandhi.prajit.spring.maven.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
	@RequestMapping(value = "/greetingInternal")
	public String greetingInternal(Model model) {
		model.addAttribute("greeting", "Prajit Learns SpringMvc4.Next Stop Spring Mvc 5.");
		// return "hello.jsp";//Until View Resolver Attached,ByPassing View Resolver
		// InternalResourceViewResolver
		return "hello";
	}

	@RequestMapping(value = "/index")
	public String index(Model model) {
		return "forward:index.jsp";
	}

	@RequestMapping(value = "/hello")
	public String hello(Model model) {
		model.addAttribute("greeting", "Prajit Learns SpringMvc4.Next Stop Spring Mvc 5.");
		return "forward:hello.jsp";
	}
}
