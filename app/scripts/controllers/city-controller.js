angular.module('yrApp').controller('CityCtrl', function($scope, sampleService, $routeParams){
  
  sampleService.getCity($routeParams).then(function(data){  	
  	$scope.city = data;
  	$scope.currentForecast = data.forecast[0];
  	console.debug($scope.currentForecast);
  }, function(error){
		alert("gi faen");
  });
});