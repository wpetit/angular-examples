'use strict';

describe('Service: nameService', function () {

  // load the service's module
  beforeEach(module('angular-examplesApp'));

  // instantiate service
  var nameService;
  beforeEach(inject(function (_nameService_) {
    nameService = _nameService_;
  }));

  it('should do something', function () {
    expect(!!nameService).toBe(true);
  });

});
