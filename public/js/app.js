var app = angular.module('textSupport', ["ngRoute", "firebase"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'js/templates/homeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/support', {
		templateUrl: 'js/templates/supportTmpl.html',
		controller: 'supportCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})