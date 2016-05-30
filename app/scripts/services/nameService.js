'use strict';

/**
 * @ngdoc service
 * @name angular-examplesApp.name
 * @description
 * # name
 * Service in the angular-examplesApp.
 */
angular.module('angular-examplesApp')
  .service('nameService', function ($q) {
    this.check = function(username) {
        var deferred = $q.defer();
        if(username === 'Hodor') {
            deferred.resolve();
        } else {
            deferred.reject('Sorry, I just know Hodor !');
        }
        return deferred.promise;
    }
  });
