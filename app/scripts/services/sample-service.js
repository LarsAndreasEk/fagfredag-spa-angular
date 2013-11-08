angular.module('yrApp').factory('sampleService', function ($http, $q){
	
	return {
		sayHello: function () {
			return 'Hello World!';
		},
		getCity: function(place) {
			var deferred = $q.defer();
			var url = 'http://yr-proxy.tosh.no/sted/'+place.country+"/"+place.fylke+"/"+place.kommune+"/"+ place.sted+'/varsel.json';

			$http.get(url).success(function(data){

				setTimeout(function(){

				deferred.resolve({
			  		location: {
				  		name: data.weatherdata.location[0].name[0],
				  		country: data.weatherdata.location[0].country[0]									  			
			  		},
			  		forecast: data.weatherdata.forecast[0].tabular[0].time.map(function(timeItem){
	  					return {
							temperature: timeItem.temperature[0].value,
							symbolname: timeItem.symbol[0].var,
							weathername: timeItem.symbol[0].name,
							precipitation: timeItem.precipitation[0],
							windSpeed: timeItem.windSpeed[0],
							windDirection: timeItem.windDirection[0]
	  					};
			  		})
				});

				}, 3000);

			}).error(function(error){
				deferred.reject(error);
			});

			return deferred.promise;
		},
		doSearch: function(searchCriteria){
			var deferred = $q.defer();
			$http.get("http://yr-proxy.tosh.no/search?q="+searchCriteria)
				.success(function(result){
					deferred.resolve(result);
				});
			return deferred.promise;
		}
	};
});