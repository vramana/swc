function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var A = function A() {
    "use strict";
    _classCallCheck(this, A);
};
var B = function B() {
    "use strict";
    _classCallCheck(this, B);
};
var C = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(C, A);
    function C() {
        _classCallCheck(this, C);
        return _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
    }
    return C;
}(A);
var a;
var b;
// Basic
if (isC(a)) {
    a.propC;
}
// Sub type
var subType;
if (isA(subType)) {
    subType.propC;
}
// Union type
var union;
if (isA(union)) {
    union.propA;
}
if (isC_multipleParams(a, 0)) {
    a.propC;
}
// Methods
var obj1;
var D = /*#__PURE__*/ function() {
    "use strict";
    function D() {
        _classCallCheck(this, D);
    }
    _createClass(D, [
        {
            key: "method1",
            value: function method1(p1) {
                return true;
            }
        }
    ]);
    return D;
}();
// Arrow function
var f1 = function(p1) {
    return false;
};
// Function expressions
f2(function(p1) {
    return true;
});
acceptingBoolean(isA(a));
acceptingTypeGuardFunction(isA);
// Binary expressions
var union2;
var union3 = isA(union2) || union2;
