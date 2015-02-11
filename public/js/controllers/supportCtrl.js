var app = angular.module('textSupport');

app.controller('supportCtrl', function($scope, $firebase, mainService) {

var ref = new Firebase("https://textsupport-pemba.firebaseio.com/numbers");
var sync = $firebase(ref)
$scope.texts = sync.$asArray();

console.log(sync.$asArray());

$scope.bindText = function() {
	mainService.postData($scope.inputText);
	$scope.inputText = '';
}

});