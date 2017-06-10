require.config({
	baseUrl: '/',
	paths: {
		'jquery': 'bower_components/jquery/dist/jquery.min',
		'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'angular': 'bower_components/angular/angular.min',
		'angularRoute': 'bower_components/angular-route/angular-route.min',
		'quicksand': 'bower_components/quicksand/jquery.quicksand.min',
		'migrate': 'bower_components/jquery-migrate/jquery-migrate.min',
		'scaling': 'plugin/jquery-animate-css-rotate-scale',
		'app': 'js/app',
		'mainCtrl': 'js/controllers/mainCtrl',
		'picture-carousel':	'js/directives/picture-carousel',
		'latest-movie': 'js/directives/latest-movie',
		'production': 'js/directives/production',
		'photos': 'js/directives/photos',
		'userService': 'js/services/userService',
		'goto': 'js/directives/goto'

	},
	shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'migrate': {deps:['jquery']},
        'quicksand': {deps:['jquery','migrate','scaling']},
        'scaling': {deps:['jquery']}
    }
});

require(['bootstrap','quicksand']);
require([
	'angular',
	'mainCtrl',
	'goto',
	'picture-carousel',
	'latest-movie',
	'production',
	'photos'
], function (angular) {
	angular.bootstrap(document,['app']);
});