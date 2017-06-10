define(['app'], function (app) {
	app.factory('userService', ['$http', '$q', function ($http, $q) {
		var userService = {};
		//send email
		userService.sendEmail = function (name, email, subject, content) {
			var deferd = $q.defer();
			$http.post('/email', {
				name: name,
				email: email,
				subject: subject,
				content: content
			}).then(function (data) {
				deferd.resolve(data);
			},function (err) {
				deferd.reject(err);
			});
			return deferd.promise;
		};

		return userService;
	}]);
});