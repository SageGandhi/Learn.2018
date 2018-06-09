package edu.gandhi.prajit.maven.chap12.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy(proxyTargetClass=true)//Using CircuitBreakerService Interface Here
@ComponentScan(basePackages="edu.gandhi.prajit.maven.chap12")
public class SystemConfiguration {

}
