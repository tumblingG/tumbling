define(['app'], function (app) {
	app.directive('photos', function () {
			return {
			restrict: 'AE',
			templateUrl: 'templates/photos.html',
			scope: {},
			link: function ($scope) {
				$scope.title= '剧照';
				$scope.Photos = [
					{ type: 'lift',image: 'photo1.jpg' },
					{ type: 'movie',image: 'photo2.jpg' },
					{ type: 'portrait',image: 'photo3.jpg' },
					{ type: 'movie',image: 'photo4.jpg' },
					{ type: 'lift',image: 'photo5.jpg' },
					{ type: 'portrait',image: 'photo6.jpg' }
				];
				$scope.first = true;
				$scope.filter = function ($event) {
					if ($scope.first) {
						$scope.portList = $('.photo-list').clone();
						$scope.first = false;
					}

					$($event.target).parent().siblings().find(".active").removeClass('active');
					$($event.target).addClass('active');

					var filterClass = $($event.target).attr('data-value');
					var filterElements = null;
					if (filterClass === 'all'){
						filterElements = $scope.portList.find('li');
					}else {
						filterElements = $scope.portList.find('li[data-type=' + filterClass + ']');
					}
					$('.photo-list').quicksand(filterElements, {
						duration: 1000,
	    				easing: "swing",
	    				attribute: "data-id",
	    				useScaling: true
					});
				};
			}
		};
	});
	
});