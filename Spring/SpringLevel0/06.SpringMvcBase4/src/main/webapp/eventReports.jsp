<!doctype html>
<html ng-app>
<head>
<title>Events Angular http://localhost:8080/SpringMvcBase4/eventReports.jsp</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
<script src="events.js"></script>
</head>
<body>
	<div ng-controller="Events">
		We Have {{events.length}} Events!
		<ul class="events-container">
			<li ng-repeat="event in events">{{event.name}}</li>
		</ul>
	</div>
</body>
</html>