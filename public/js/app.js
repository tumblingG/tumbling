define(['angular', 'angularRoute'], function (angular) { 
	var app = angular.module('app', ['ngRoute']);
	app.config(['$locationProvider', function ($locationProvider) {
		$locationProvider.html5Mode(false);
		$locationProvider.hashPrefix('');
	}]);
	return app;
});

