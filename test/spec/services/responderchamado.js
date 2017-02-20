'use strict';

describe('Service: ResponderChamado', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var ResponderChamado;
  beforeEach(inject(function (_ResponderChamado_) {
    ResponderChamado = _ResponderChamado_;
  }));

  it('should do something', function () {
    expect(!!ResponderChamado).toBe(true);
  });

});
