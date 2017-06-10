define(['app'], function (app) {
	app.directive('productions', function () {
		return {
			restrict: 'AE',
			templateUrl: 'templates/production.html',
			scope: {},
			link: function ($scope) {
				$scope.title = '代表作品';
				$scope.Productions = [
					{
						name: '胭脂',
						position: '饰：蓝胭脂',
						job: '1937年日军发动全面侵华战争，激起了中华民族强烈的爱国热情，上海进步女青年蓝胭脂和她的大学同学们也一起走上街头，呼吁抵制日货，以声援前线将士...',
						image: 'production1.jpg'
					},
					{
						name: '花千骨',
						position: '饰：花千骨',
						job: '花千骨，命格诡异的孤女，出生时身怀异香，易招惹魔徒，被长留上仙白子画所救，对其暗生情愫；白子画，一心想保护天下苍生的长留掌门，明知花千骨是自己的生死劫...',
						image: 'production2.jpg'
					},
					{
						name: '杉杉来了',
						position: '饰：杉杉',
						job: '虽然怀揣梦想，想通过自己努力成就一番事业，天性善良的杉杉是因为自己有着稀有血型被招进风腾，不过杉杉不忘初心，一直奋斗!为总裁妹妹输血后杉杉被嘉奖吃猪肝饭...',
						image: 'production3.jpg'
					},
					{
						name: '陆贞传奇',
						position: '饰：陆贞',
						job: '陆贞出身官商世家，母亲早亡的她自小善良聪慧，是父亲生意上的得力助手，因此被继母妒恨，终遭其迫害，致使父死家亡，无处安身。为躲避继母的追杀，她参加宫女考试...',
						image: 'production4.jpg'
					}
				];
			} 
		};
	});
});