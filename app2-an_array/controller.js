angular.module('arrayApp')
.controller('arrayController', function($scope, arrayService){

$scope.arrayData = arrayService.getData();



});