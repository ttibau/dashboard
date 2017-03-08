'use strict';

describe('Controller: CategoriachamadosCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var CategoriachamadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriachamadosCtrl = $controller('CategoriachamadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CategoriachamadosCtrl.awesomeThings.length).toBe(3);
  });
});
