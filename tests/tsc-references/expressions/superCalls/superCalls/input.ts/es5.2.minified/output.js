function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}, Base1 = function(n) {
    "use strict";
    _classCallCheck(this, Base1), this.x = 43;
}, Derived = function(Base) {
    "use strict";
    function Derived(q) {
        var _this;
        return _classCallCheck(this, Derived), (_this = _possibleConstructorReturn(this, _getPrototypeOf(Derived).call(this, ""))).q = q, (_this = _possibleConstructorReturn(this, _getPrototypeOf(Derived).call(this, ""))).q = q, _this;
    }
    return _inherits(Derived, Base), Derived;
}(Base1), OtherBase1 = function() {
    "use strict";
    _classCallCheck(this, OtherBase1);
}, OtherDerived = function(OtherBase) {
    "use strict";
    function OtherDerived() {
        return _classCallCheck(this, OtherDerived), _possibleConstructorReturn(this, _getPrototypeOf(OtherDerived).call(this));
    }
    return _inherits(OtherDerived, OtherBase), OtherDerived;
}(OtherBase1);
