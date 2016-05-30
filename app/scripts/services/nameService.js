'use strict';

/**
 * @ngdoc service
 * @name angular-examplesApp.name
 * @description
 * # name
 * Service in the angular-examplesApp.
 */
angular.module('angular-examplesApp')
  .service('nameService', function ($q, $http) {
    this.check = function(username) {
	return $http.get('/resources/'+username+'.json');
    };
  });
