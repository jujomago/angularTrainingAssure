'use strict';

/**
 * @ngdoc filter
 * @name angularProject01App.filter:addSpaces
 * @function
 * @description
 * # addSpaces
 * Filter in the angularProject01App.
 */
angular.module('angularProject01App')
  .filter('addSpaces', function () {
    return function (input) {
      var tempi='';
      for (var i = 0; i < input.length; i++) {
      	tempi+=input[i]+'_';
      }

      return tempi;

    };
  });
