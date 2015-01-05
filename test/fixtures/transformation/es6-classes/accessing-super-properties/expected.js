"use strict";

var _inherits = function (child, parent) {
  if (typeof parent !== "function" && parent !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof parent);
  }
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

var Test = (function () {
  var _Foo = Foo;
  var Test = function Test() {
    _Foo.prototype.test;
    _Foo.prototype.test.whatever;
  };

  _inherits(Test, _Foo);

  return Test;
})();
