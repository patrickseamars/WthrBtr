'use strict'

var app = angular.module('wthrBtr', [
	'ionic',
	'ngRoute',
	'LocalStorageModule',
	'wthrBtr.welcome',
	'wthrBtr.weather'
	]);
app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

app.config(['$routeProvider', function($routeProvider){
	// Default view is Welcome
	$routeProvider.when('/weather',{
		templateUrl: '../weather/weather.view.html'
	})
	.otherwise({
		redirectTo: '/welcome'
	});
}]);

app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
	.setPrefix('wthrBtr');
});

