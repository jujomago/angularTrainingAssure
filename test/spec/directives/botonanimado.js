'use strict';

describe('Directive: BotonAnimado', function () {

  // load the directive's module
  beforeEach(module('angularProject01App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-boton-animado></-boton-animado>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the BotonAnimado directive');
  }));
});
