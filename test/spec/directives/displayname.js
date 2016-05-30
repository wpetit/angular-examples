'use strict';

describe('Directive: displayName', function () {

  // load the directive's module
  beforeEach(module('angular-examplesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    scope.username='test';
    element = angular.element('<display-name name="username"></display-name>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('Hello {{name}} !');
  }));
});
