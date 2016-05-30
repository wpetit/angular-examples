'use strict';

/**
 * @ngdoc filter
 * @name angular-examplesApp.filter:nameFilter
 * @function
 * @description
 * # nameFilter
 * Filter in the angular-examplesApp.
 */
angular.module('angular-examplesApp')
  .filter('nameFilter', function () {
    return function (name) {
      return 'Your name is '+ name +' but I\'d rather call you Hodor !';
    };
  });
