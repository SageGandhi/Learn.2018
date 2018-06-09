package edu.gandhi.prajit.maven.chap10;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan(basePackages="edu.gandhi.prajit.maven.chap10")
public class SystemConfiguration {

}
