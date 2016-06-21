'use strict';

describe('Controller: ProbandoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularProject01App'));

  var ProbandoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProbandoCtrl = $controller('ProbandoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProbandoCtrl.awesomeThings.length).toBe(3);
  });
});
