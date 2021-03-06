<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<title>Add Minutes Page</title>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	$.getJSON('<spring:url value="activities.json"/>', {ajax : 'true'}, function(data){
		var html = '<option value="">--Please Select One--</option>';
		for (var i = 0; i < data.length; i++) {
			html += '<option value="' + data[i].desc + '">'+ data[i].desc + '</option>';
		}
		html += '</option>';
		$('#activities').html(html);
	});			
});	
</script>
</head>
<body>
	<h1>Add Minutes Exercised</h1>
	<%--org.springframework.web.servlet.i18n.LocaleChangeInterceptor --%>
	<%--org.springframework.web.servlet.i18n.SessionLocaleResolver:Default Locale View Resolver --%>
	Language :
	<a href="?language=en">English</a> |
	<a href="?language=es">Spanish</a>
	<form:form commandName="excercise">
		<table>
			<tr>
				<%--"org.springframework.context.support.ResourceBundleMessageSource" --%>
				<td><spring:message code="goal.text" /></td>
				<td><form:input path="minutes" /></td>
				<td>
				<form:select id="activities" path="activity"></form:select>
			</td>
			</tr>
			<tr>
				<td colspan="2"><input type="submit" value="Enter Exercise" />
				</td>
			</tr>
		</table>
	</form:form>
	<h3>Our Goal For The Day From Session: ${goal.minutes}</h3>
</body>
</html>