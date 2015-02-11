var app = angular.module('textSupport');

app.service('mainService', function($http, $firebase) {

	this.postData = function(message) {
		return $http.post('http://localhost:8666/support/messages', {body: message});
	}


});