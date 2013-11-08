angular.module("yrApp").directive("forecast", function(){
	return {
		restrict: "E",
		templateUrl: "views/directives/forecast.html",
		controller: "ForecastDirectiveCtrl",
		scope: {
			country: "@",
			fylke: "@",
			kommune: "@",
			sted: "@"
		}
	};
});


angular.module("yrApp").controller("ForecastDirectiveCtrl", function($scope, sampleService){
	sampleService.getCity($scope)
		.then(function(data){
			$scope.isLoaded = true;
		  	$scope.city = data;
		  	$scope.currentForecast = data.forecast[0];
		});
});
