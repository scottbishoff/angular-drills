angular.module('myApp')
.service('myService', function($http){
console.log('myservice is working')
var baseUrl = 'http://www.ksl.com/classifieds/api.php?cmd=list&s=mountain bike'

this.findBikes = function() {
	return $http({
		method: 'GET',
		url: baseUrl
	});
}

});