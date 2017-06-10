define(['app'], function (app) {
	app.directive('goto', function () {
		return function ($scope, $elem) {
			$elem[0].onclick = function (event) {
				event.preventDefault();
				var id = $(this).attr('href');
				$('html, body').animate({scrollTop: $(id).offset().top}, 1000);
			};
		};
	});
});