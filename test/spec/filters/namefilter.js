'use strict';

describe('Filter: nameFilter', function () {

  // load the filter's module
  beforeEach(module('angular-examplesApp'));

  // initialize a new instance of the filter before each test
  var nameFilter;
  beforeEach(inject(function ($filter) {
    nameFilter = $filter('nameFilter');
  }));

  it('should return the input prefixed with "nameFilter filter:"', function () {
    var text = 'angularjs';
    expect(nameFilter(text)).toBe('Your name is angularjs but I\'d rather call you Hodor !');
  });

});
