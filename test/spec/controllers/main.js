'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angular-examplesApp'));

  var MainCtrl,
    scope, nameService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    //define nameService Mock
    nameService = {
        check : function(name) {
            var deferred = $q.defer();
            if(name === 'Hodor') {
                deferred.resolve();
            } else {
                deferred.reject('error');
            }
            return deferred.promise;
        }
    }
    
    //spy mock to check if it has been called
    spyOn(nameService, 'check').and.callThrough();
      
    //inject mocks
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      // place here mocked dependencies
      nameService : nameService
    });
  }));

  it('should update validate name to the scope', inject(function ($rootScope) {
    scope.username = 'Hodor';
    scope.validate();
    // execute async tasks
    $rootScope.$apply();
    //check the mock has been called
    expect(nameService.check).toHaveBeenCalledWith('Hodor');
    //check the controller has been updated
    expect(scope.validatedName).toBe('Hodor');
  }));
});
