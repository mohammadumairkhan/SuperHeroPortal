'use strict';

angular.module('SHeroPortal').controller('dashboardCtrl', function($scope, $http, $location, herosSvc){

    $http.get('./data/superheroarchive.json').then(function(res){
    	herosSvc.setHeros(res.data);
		$scope.heros = res.data;
    }, function(res){
    	console.log('an error has occured');
    });
});