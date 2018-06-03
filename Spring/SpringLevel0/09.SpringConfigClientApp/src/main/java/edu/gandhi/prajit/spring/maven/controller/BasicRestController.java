package edu.gandhi.prajit.spring.maven.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.gandhi.prajit.spring.maven.ConfigClientAppConfiguration;

@RestController
@RefreshScope
public class BasicRestController {
	@Autowired
	private ConfigClientAppConfiguration configClientAppConfiguration;
	@Value("${MyGlobal.FirstNameProperty}")
	private String globalFirstName;

	@Value("${Prajit.Password}")
	private String prajitPassword;
	
	@RequestMapping("/")
	public String message() {
		return "Global:" + globalFirstName + ":ConfigClientAppConfiguration[getFirstNameProperty]:"
				+ configClientAppConfiguration.getFirstNameProperty()
				+ ":ConfigClientAppConfiguration[getLastNameProperty]:"
				+ configClientAppConfiguration.getLastNameProperty()
				+":My Password:"+prajitPassword;
	}
}
