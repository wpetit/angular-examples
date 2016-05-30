'use strict';

/**
 * @ngdoc directive
 * @name angular-examplesApp.directive:displayName
 * @description
 * # displayName
 */
angular.module('angular-examplesApp')
  .directive('displayName', function () {
    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      template: '<div>Hello {{name}} !</div>'
    };
  });
