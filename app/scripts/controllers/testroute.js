'use strict';

/**
 * @ngdoc function
 * @name angularProject01App.controller:TestrouteCtrl
 * @description
 * # TestrouteCtrl
 * Controller of the angularProject01App
 */
angular.module('angularProject01App')
  .controller('TestrouteCtrl', function () {
  	this.todos=['learn angular','learn node','learn es6','make some tests','manage versions'];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
