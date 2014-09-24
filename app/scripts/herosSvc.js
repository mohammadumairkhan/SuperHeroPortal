'use strict';

angular.module('SHeroPortal').factory('herosSvc', function(){

	var Heros = [];

	return {
		getHeros: getHeros,
		setHeros: setHeros,
		getHero : getHero,
		getHeroDetail:getHeroDetail
	}

	function getHeros(){
		return Heros;
	}

	function setHeros(heros){
		Heros = angular.copy(heros);
	}

	function getHero(heroId){
		return _.find(Heros, {id: heroId});
	}

	function getHeroDetail(hero){
		var keys = Object.keys(hero.info);
		var retVal = [];

		_.forEach(keys, function(key){
			retVal.push({
				key: key,
				value: hero.info[key]
			});
		});

		return retVal;
	}
});