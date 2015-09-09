'use strict';

describe('Service: menuGetter', function () {

  // load the service's module
  beforeEach(module('ichabodngApp'));

  // instantiate service
  var menuGetter;
  beforeEach(inject(function (_menuGetter_) {
    menuGetter = _menuGetter_;
  }));

  it('should do something', function () {
    expect(!!menuGetter).toBe(true);
  });

});
