'use strict';

describe('Controller: ResponderchamadoCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ResponderchamadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponderchamadoCtrl = $controller('ResponderchamadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResponderchamadoCtrl.awesomeThings.length).toBe(3);
  });
});
