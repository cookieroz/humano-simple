'use strict';

describe('Controller: FotoCtrl', function () {

  // load the controller's module
  beforeEach(module('humanoApp'));

  var FotoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FotoCtrl = $controller('FotoCtrl', {
      $scope: scope
    });
  }));

  it('should have many photos', function () {
    expect(scope.images.length).toBe(24);
  });
});
