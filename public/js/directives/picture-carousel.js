define(['app'], function (app) {
	app.directive('pictureCarousel', function () {
		return {
			restrict: 'AE',
			templateUrl: 'templates/picture-carousel.html',
			scope: {},
			link: function ($scope) {
				$scope.Carousels = [
					{
						backgroundImage: 'carousel1.jpg',
						title: '眉梢眼角藏秀气',
						subhead: ''
					},
					{
						backgroundImage: 'carousel2.jpg',
						title: '声音笑貌露温柔',
						subhead: ''
					},
					{
						backgroundImage: 'carousel3.jpg',
						title: '回眸一笑百媚生',
						subhead: ''
					},
					{
						backgroundImage: 'carousel4.jpg',
						title: '六宫粉黛无颜色',
						subhead: ''
					},
					{
						backgroundImage: 'carousel5.jpg',
						title: '娴静犹如华照水',
						subhead: ''
					},
					{
						backgroundImage: 'carousel6.jpg',
						title: '铅华销尽见天真',
						subhead: ''
					}

				];
			}
		};
	});
});