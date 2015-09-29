'use strict';

/**
 * @ngdoc overview
 * @name humanoApp
 * @description
 * # humanoApp
 *
 * Main module of the application.
 */
angular
  .module('humanoApp', [
    'ngResource',
    'ngRoute',
    'angularVideoBg'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('humanoApp').controller('VideoCtrl', function($scope) {
  $scope.video = {
    id: '2x113QS0Vls'
  };
  // create a mute and unmute button
  // test on mobile
});
