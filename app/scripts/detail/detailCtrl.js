'use strict';

angular.module('SHeroPortal').controller('detailCtrl', function($scope, herosSvc, $routeParams, $http){
	$scope.selectedHero = herosSvc.getHero($routeParams.hero);
	var detailPath = './data/detail/'+$routeParams.hero+'.json';
	
	$http.get(detailPath).then(function(res){
		$scope.selectedHeroObj = res.data;
		$scope.selectedHeroDetail = herosSvc.getHeroDetail(res.data);
	}, function(res){

	})


});