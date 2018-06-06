package edu.gandhi.prajit.maven.chap02.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan(basePackages = { "edu.gandhi.prajit.maven.chap02" })
public class SimpleAspectConfiguration {

}
