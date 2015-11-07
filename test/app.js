'use strict';

describe('Controller: VideoCtrl', function () {

  // load the controller's module
  beforeEach(module('humanoApp'));

  var VideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoCtrl = $controller('VideoCtrl', {
      $scope: scope
      // place here mocked dependencies
      // 
    });
  }));

  it('video id', function () {
    expect(scope.video.id).toEqual("seqzSKbxgME");
  });
});
