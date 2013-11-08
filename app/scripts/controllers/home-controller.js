angular.module('yrApp').controller('HomeCtrl', function ($scope, sampleService) {
  $scope.searchCriteria = 'oslo';
  $scope.doSearch = function(){  	
  	console.debug("søker på " + $scope.searchCriteria)
  	sampleService
  		.doSearch($scope.searchCriteria)
  		.then(function(result){  			
  			$scope.searchResult = result;
  		});
  }
});
