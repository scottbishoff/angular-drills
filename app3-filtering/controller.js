angular.module('myApp')
.controller('myCtrl', function($scope, myService){
	$scope.myFilter = '';
	$scope.myData = myService.getData();

});