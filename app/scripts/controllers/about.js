'use strict';

/**
 * @ngdoc function
 * @name humanoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the humanoApp
 */
angular.module('humanoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
