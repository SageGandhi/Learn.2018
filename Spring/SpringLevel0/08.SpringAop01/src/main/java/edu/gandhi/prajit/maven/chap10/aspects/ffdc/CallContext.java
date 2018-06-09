package edu.gandhi.prajit.maven.chap10.aspects.ffdc;

import java.util.ArrayList;
import java.util.List;

import org.aspectj.lang.JoinPoint;

class CallContext {
	private List<Call> calls = new ArrayList<Call>();
	private Throwable firstFailure;
	private int depth = 0;

	public void before(JoinPoint joinPoint) {
		calls.add(new Call(joinPoint, this.depth++));
	}

	public void afterReturning(Object result) {
		calls.get(calls.size() - 1).setResult(result.toString());
		endCall();
	}

	private void endCall() {
		this.depth--;
		if (depth == 0) {
			calls.clear();
		}
	}

	public void afterThrowing(Throwable ex) {
		if (this.firstFailure == null) {
			this.firstFailure = ex;
		}
		log(ex);
		endCall();
	}

	private void log(Throwable ex) {
		for (Call c : calls) {
			StringBuilder builder = new StringBuilder();
			for (int i = 0; i < c.getDepth(); i++) {
				builder.append("    ");
			}
			builder.append(c.toString());
			System.out.println(builder.toString());
		}
		System.out.println("Call Resulted In Exception");
		ex.printStackTrace();
		if (firstFailure != null && firstFailure != ex) {
			System.out
					.println("First Failure Data Capture Detected Other Than Exception Thrown: "
							+ firstFailure.getMessage());
			firstFailure.printStackTrace();
		}
	}

}
