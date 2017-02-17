'use strict';

describe('Service: FirebaseConfig', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var FirebaseConfig;
  beforeEach(inject(function (_FirebaseConfig_) {
    FirebaseConfig = _FirebaseConfig_;
  }));

  it('should do something', function () {
    expect(!!FirebaseConfig).toBe(true);
  });

});
