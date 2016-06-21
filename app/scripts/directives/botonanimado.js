'use strict';

/**
 * @ngdoc directive
 * @name angularProject01App.directive:BotonAnimado
 * @description
 * # BotonAnimado
 */
angular.module('angularProject01App')
  .directive('botonAnimado', function () {
    return {
      templateUrl: 'scripts/directives/mybutton.html',  
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      //  element.text('this is the BotonAnimado directive');
      }
    };
  });
