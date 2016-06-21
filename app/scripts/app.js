'use strict';

/**
 * @ngdoc overview
 * @name angularProject01App
 * @description
 * # angularProject01App
 *
 * Main module of the application.
 */
angular
  .module('angularProject01App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/probando', {
        templateUrl: 'views/probando.html',
        controller: 'ProbandoCtrl',
        controllerAs: 'probando'
      })
      .when('/testroute', {
        templateUrl: 'views/testroute.html',
        controller: 'TestrouteCtrl',
        controllerAs: 'testroute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
