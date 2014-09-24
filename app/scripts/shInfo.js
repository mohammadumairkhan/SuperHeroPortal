'use strict';

angular.module('SHeroPortal').directive('shInfo', function(){
	return {
		restrict: 'E',
		templateUrl: './app/views/templates/shInfo.html',
		scope: {
			hero: '=',
			showViewButton:'='
		},
		controller: function($scope, $location){

			$scope.onHeroClick = function(hero){
    			$location.search('hero', hero.id).path('/detail');
    		}
		}
	}
});