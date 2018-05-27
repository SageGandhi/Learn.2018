package edu.gandhi.prajit.spring.maven;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

/**
 * PlaceHolder For Web.xml
 * 
 * @author Prajit.Gandhi
 *
 */
public class WebAppInitializer implements WebApplicationInitializer {
	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		final AnnotationConfigWebApplicationContext annotationConfigWebApplicationContext = new AnnotationConfigWebApplicationContext();
		annotationConfigWebApplicationContext.setConfigLocation("edu.gandhi.prajit.spring.maven.WebConfig");
		servletContext.addListener(new ContextLoaderListener(annotationConfigWebApplicationContext));

		final ServletRegistration.Dynamic dispatcherServlet = servletContext.addServlet("DispatcherServlet",
				new DispatcherServlet(annotationConfigWebApplicationContext));
		dispatcherServlet.setLoadOnStartup(1);
		dispatcherServlet.addMapping("*.html");
		// Static Resources Using addResourceHandler In WebConfig
		dispatcherServlet.addMapping("*.pdf");
		dispatcherServlet.addMapping("*.json");
	}

}
