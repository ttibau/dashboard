'use strict';

describe('Controller: ChamadossolucionadosCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ChamadossolucionadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChamadossolucionadosCtrl = $controller('ChamadossolucionadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChamadossolucionadosCtrl.awesomeThings.length).toBe(3);
  });
});
