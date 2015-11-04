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
        templateUrl: 'templates/main.html'
      })
      .when('/fotos', {
        templateUrl: 'templates/fotos.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('humanoApp').controller('VideoCtrl', function($scope) {
  $scope.video = {
    id: 'seqzSKbxgME'
  };
  // create a mute and unmute button
  // test on mobile
});

angular.module('humanoApp')
  .controller('FotoCtrl', function ($scope) {
    $scope.images = [
      '../images/humano-music-01.jpg',
      '../images/humano-music-02.jpg',
      '../images/humano-music-03.jpg',
      '../images/humano-music-04.jpg',
      '../images/humano-music-05.jpg',
      '../images/humano-music-06.jpg',
      '../images/humano-music-07.jpg',
      '../images/humano-music-08.jpg',
      '../images/humano-music-09.jpg',
      '../images/humano-music-10.jpg',
      '../images/humano-music-11.jpg',
      '../images/humano-music-12.jpg',
      '../images/humano-music-13.jpg',
      '../images/humano-music-14.jpg',
      '../images/humano-music-15.jpg',
      '../images/humano-music-16.jpg',
      '../images/humano-music-17.jpg',
      '../images/humano-music-18.jpg',
      '../images/humano-music-19.jpg',
      '../images/humano-music-20.jpg',
      '../images/humano-music-21.jpg',
      '../images/humano-music-22.jpg',
      '../images/humano-music-23.jpg',
      '../images/humano-music-24.jpeg'
    ];
  });
