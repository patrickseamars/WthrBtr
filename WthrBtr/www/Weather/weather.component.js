'use strict';

angular.module('wthrBtr.weather', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/weather', {
        templateUrl: '/weather/weather.view.html',
        controller: 'WeatherCtrl'
    });
}])
.controller('WeatherCtrl', [function($scope){
	console.log('helllo');
	$scope.getWeather = function () {
		// body...
		
	}
}]);

