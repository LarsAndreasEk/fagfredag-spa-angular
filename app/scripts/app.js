angular.module('yrApp', ['ngRoute']).config(function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/city/:country/:fylke/:kommune/:sted', {
    	templateUrl: '../views/city.html',
    	controller: 'CityCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
