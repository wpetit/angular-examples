'use strict';

/**
 * @ngdoc function
 * @name angular-examplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular-examplesApp
 */
angular.module('angular-examplesApp')
  .controller('MainCtrl', function ($scope, $filter, nameService) {
        $scope.validate = function() {
            $scope.error = '';
            $scope.validatedName = '';
            nameService.check($scope.username).then(function() {
                $scope.validatedName = $scope.username;
            }, function(err) {
                $scope.error = err;
            })
        };
    
        $scope.filteredValue = $filter('nameFilter')('Walder');
        
  });
