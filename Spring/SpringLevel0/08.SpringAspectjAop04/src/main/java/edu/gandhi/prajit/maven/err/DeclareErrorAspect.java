package edu.gandhi.prajit.maven.err;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.DeclareWarning;

@Aspect
public class DeclareErrorAspect {
	//Exception+ Means All SubClass Of Exception
	@DeclareWarning("call (* java.lang.Exception+.printStackTrace(..))")
	public static final String noPrintStackTrace = "printStackTrace() Not Allowed-Log Exception Please!";
	@DeclareWarning("(call(* java.sql..*.*(..)) || call(* javax.sql..*.*(..)) ) && !within(edu.gandhi.prajit.maven.err..repository..*)")
	public static final String jdbcOnlyInRepository = "Jdbc May Only Be Used In Repositories!";
	
}
