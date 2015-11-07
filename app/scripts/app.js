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
    'angularVideoBg',
    'fblindSimpleImageGallery'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/fotos', {
        templateUrl: 'views/fotos.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
