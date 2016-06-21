'use strict';

describe('Filter: addSpaces', function () {

  // load the filter's module
  beforeEach(module('angularProject01App'));

  // initialize a new instance of the filter before each test
  var addSpaces;
  beforeEach(inject(function ($filter) {
    addSpaces = $filter('addSpaces');
  }));

  it('should return the input prefixed with "addSpaces filter:"', function () {
    var text = 'angularjs';
    expect(addSpaces(text)).toBe('addSpaces filter: ' + text);
  });

});
