'use strict';

/**
 * @ngdoc function
 * @name humanoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the humanoApp
 */
angular.module('humanoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
