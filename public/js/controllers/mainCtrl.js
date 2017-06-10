define(['app','userService'], function (app) {
	app.controller('MainCtrl',['$scope', 'userService', function ($scope, userService) {
		$scope.title = 'PATROS';
		$scope.About = {
			title: '关于',
			content: '赵丽颖，1987年10月16日出生于河北省廊坊市，中国内地影视女演员。2006年，因获得雅虎搜星比赛冯小刚组冠军而进入演艺圈；同年，在冯小刚执导的广告片《跪族篇》中担任女主角。2007年，参演个人首部电影《镖行天下之牡丹阁》。2011年，因在古装剧《新还珠格格》中饰演晴儿一角而被观众认识。2013年，凭借古装剧《陆贞传奇》获得更多关注。2014年10月，在第10届金鹰电视艺术节举办的投票活动中被选为“金鹰女神”。12月，凭借都市爱情剧《杉杉来了》获得第5届国剧盛典内地最具人气女演员奖[5]  ；同年，成立海润传媒赵丽颖工作室。'
		};
		$scope.submited = false;
		$scope.sendEmail = function () {
			function success(data) {
				console.log(data);
				$scope.name = '';
				$scope.email = '';
				$scope.subject = '';
				$scope.message = '';
				$scope.submited = false;
				alert('发送成功');
			}
			function error(err) {
				console.log(err);
				alert('发送失败');
			}
			
			if ($scope.contactForm.$valid) {
				userService.sendEmail($scope.name, $scope.email, $scope.subject, $scope.message).then(success, error);
			}else {
				$scope.submited = true;
			}
			
		};
	}]);
});