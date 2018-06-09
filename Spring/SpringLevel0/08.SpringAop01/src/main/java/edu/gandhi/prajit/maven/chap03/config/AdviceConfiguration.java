package edu.gandhi.prajit.maven.chap03.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableAspectJAutoProxy
@Configuration
@ComponentScan(basePackages= {"edu.gandhi.prajit.maven.chap03"})
public class AdviceConfiguration {

}
