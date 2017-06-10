define(['app'], function (app) {
	app.directive('latestMovie', function () {
		return {
			restrict: 'AE',
			templateUrl: 'templates/latest-movie.html',
			scope: {},
			link: function ($scope) {
				$scope.title = '最新影视';
				$scope.Movies = [
					{
						title: '楚乔传',
						image: 'movie1.jpg',
						href: '#',
						content: ' 西魏年间乱世混战，大批平民在战乱中沦为奴隶，命如草芥。奴籍少女楚乔被送入人猎场供贵族娱乐射杀，幸得西凉世子燕洵暗中相救。随后她被带进权倾朝野的门阀宇文家，目睹兄姐相继惨死，立誓要带妹妹逃出牢笼...'
					},
					{
						title: '老九门',
						image: 'movie2.jpg',
						href: '#',
						content: '民国年间，九大家族镇守长沙，被称为“九门提督”。这九门势力庞大，无人不晓，几乎所有明器，流出长沙必然经过其中一家。1933年秋，一辆神秘鬼车缓缓驶入长沙火车站，九门之首“张大佛爷”张启山身为布防官，奉命调查始末...'
					},
					{
						title: '青云志',
						image: 'movie3.jpg',
						href: '#',
						content: '草庙村少年张小凡，在经历灭村惨案后，被青云门收归门下。无意获得的异宝，使小凡在青云门比武大赛上崭露头角。后在接连的挑战中，小凡与碧瑶（赵丽颖饰）的感情日渐深厚。在正反两派的旷世大战中，小凡命悬一刻...'
					}
				];
			}
		};
	});
});