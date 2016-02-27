angular.module('myApp')
.controller('myCtrl', function($scope, myService){

$scope.getBikes = function() {
	myService.findBikes()
	.then(function(response) {
		$scope.bikes = response.data;
		console.log('Here is the object', $scope.bikes)
	})
}

$scope.getBikes();

});