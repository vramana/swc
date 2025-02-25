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
var _this = this;
var B = // @noEmit: true
// @checkJs: true
// @allowJs: true
// @Filename: a.js
/*#__PURE__*/ function() {
    "use strict";
    function B() {
        _classCallCheck(this, B);
        this.n = 1;
    }
    _createClass(B, [
        {
            key: "foo",
            value: function foo() {
            }
        }
    ]);
    return B;
}();
var C = /*#__PURE__*/ function(B) {
    "use strict";
    _inherits(C, B);
    function C() {
        _classCallCheck(this, C);
        return _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
    }
    return C;
}(B);
// this override should be fine (even if it's a little odd)
C.prototype.foo = function() {
};
var D = /*#__PURE__*/ function(B) {
    "use strict";
    _inherits(D, B);
    function D() {
        _classCallCheck(this, D);
        return _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
    }
    return D;
}(B);
D.prototype.foo = function() {
    _this.n = 'not checked, so no error';
};
var Module = function Module() {
    "use strict";
    _classCallCheck(this, Module);
};
Module.prototype.identifier = undefined;
Module.prototype.size = null;
var NormalModule = /*#__PURE__*/ function(Module) {
    "use strict";
    _inherits(NormalModule, Module);
    function NormalModule() {
        _classCallCheck(this, NormalModule);
        return _possibleConstructorReturn(this, _getPrototypeOf(NormalModule).apply(this, arguments));
    }
    _createClass(NormalModule, [
        {
            key: "identifier",
            value: function identifier() {
                return 'normal';
            }
        },
        {
            key: "size",
            value: function size() {
                return 0;
            }
        }
    ]);
    return NormalModule;
}(Module);
