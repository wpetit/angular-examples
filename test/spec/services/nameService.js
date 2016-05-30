'use strict';

describe('Service: nameService', function () {

  // load the service's module
  beforeEach(module('angular-examplesApp'));

  // instantiate service
  var nameService;
  beforeEach(inject(function (_nameService_) {
    nameService = _nameService_;
  }));

  it('should get name resource', inject(function ($httpBackend) {
    // mock rest api call  
    $httpBackend.expectGET('/resources/Hodor.json').respond();
    nameService.check('Hodor');
    // trigger rest response
    $httpBackend.flush();
  }));

});
