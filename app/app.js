/**
 * Created by umair.khan on 9/24/2014.
 */
angular.module('SHeroPortal', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/', {
          templateUrl:"./app/views/homepage.html"
        })
        .when('/dashboard', {
        templateUrl: './app/views/registration/register.html',
        controller: 'registerCtrl'
    });
});
