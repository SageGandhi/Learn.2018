package edu.gandhi.prajit.spring.maven;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "edu.gandhi.prajit.spring.maven" })
public class WebConfig extends WebMvcConfigurerAdapter {
	/**
	 * @EnableWebMvc Enable Servlet Container+Dispatcher Servlet
	 *               Model-View-ViewModel,Model-View*,WebMvcConfigurationSupport.class
	 *               & Extendable Using WebMvcConfigurerAdapter.class:Helps To
	 *               Maintain NameSpace As In Xml.
	 */
	@Bean
	public InternalResourceViewResolver getInternalResourceViewResolver() {
		final InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
		internalResourceViewResolver.setPrefix("/WEB-INF/jsp/");
		internalResourceViewResolver.setSuffix(".jsp");
		return internalResourceViewResolver;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// Static Resources
		registry.addResourceHandler("/pdfs/**").addResourceLocations("/WEB-INF/pdfdocs/");
		registry.addResourceHandler("/css/**").addResourceLocations("/WEB-INF/css/");
	}

	// i18n Support Beans:Start
	/**
	 * Name This Bean Other Than messageSource,It Will Not Work Out.Same For
	 * LocaleResolver.All These Beans Are Autowire By Name No Message Found Under
	 * Code 'Key' For Locale 'Locale'
	 */
	@Bean
	public MessageSource messageSource() {
		final ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
		resourceBundleMessageSource.setBasename("i18n_messages");
		return resourceBundleMessageSource;
	}

	@Bean
	public LocaleResolver localeResolver() {
		final SessionLocaleResolver sessionLocaleResolver = new SessionLocaleResolver();
		sessionLocaleResolver.setDefaultLocale(Locale.ENGLISH);
		return sessionLocaleResolver;
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		final LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
		localeChangeInterceptor.setParamName("language");
		registry.addInterceptor(localeChangeInterceptor);
	}
	// i18n Support Beans:End
}
