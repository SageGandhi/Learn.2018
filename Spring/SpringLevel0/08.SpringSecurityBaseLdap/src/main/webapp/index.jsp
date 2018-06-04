<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="assets/css/bootstrap.css" rel="stylesheet">
<style>
body {
	padding-top: 60px;
}
</style>
<link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
<link rel="shortcut icon" href="assets/ico/favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="144x144"
	href="assets/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114"
	href="assets/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72"
	href="assets/ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed"
	href="assets/ico/apple-touch-icon-57-precomposed.png">
<style>
</style>
</head>
<body>
	<div class="navbar navbar-fixed-top navbar-inverse">
		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="addGoal.html"> Get Started </a>
				<ul class="nav">
				</ul>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="hero-unit">
			<div>
				<h1>Welcome To Fitness Tracker!<sec:authentication property="name"/>!!</h1>
				<p>To Get Started, We Need To Enter A Goal For What We Want To
					Exercise For Today.</p>
			</div>
			<a class="btn btn-primary" href="addGoal.html"> Add Goal » </a>
			<a class="btn btn-primary" href="addMinutes.html"> Add Exercise Minutes » </a>
			<sec:authorize ifAnyGranted="ROLE_ADMIN">
				<a class="btn btn-primary" href="editGoal.html"> Edit Goal[Admin] » </a>
			</sec:authorize>
			 <a class="btn btn-warning" href="j_spring_security_logout">Logout >></a>
		</div>
		<div></div>
	</div>
	<script src="jquery-1.8.3.js"></script>
	<script src="assets/js/bootstrap.js"></script>
</body>
</html>
