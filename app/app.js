/**
 * Created by umair.khan on 9/24/2014.
 */
angular.module('SHeroPortal', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/', {
          	templateUrl:"./app/views/homepage.html"
        })
        .when('/dashboard', {
        	templateUrl: './app/views/dashboard/dashboard.html',
        	controller: 'dashboardCtrl'
        })
        .when('/detail',{
        	templateUrl: './app/views/detail/detail.html',
        	controller: 'detailCtrl'
        })
        .otherwise({ redirectTo: '/' });
});
