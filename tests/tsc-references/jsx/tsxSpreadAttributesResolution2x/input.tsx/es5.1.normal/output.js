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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require('react');
var Poisoned = /*#__PURE__*/ function(_Component) {
    "use strict";
    _inherits(Poisoned, _Component);
    function Poisoned() {
        _classCallCheck(this, Poisoned);
        return _possibleConstructorReturn(this, _getPrototypeOf(Poisoned).apply(this, arguments));
    }
    _createClass(Poisoned, [
        {
            key: "render",
            value: function render() {
                return(/*#__PURE__*/ React.createElement("div", null, "Hello"));
            }
        }
    ]);
    return Poisoned;
}(React.Component);
var obj1 = {
};
// OK
/*#__PURE__*/ React.createElement(Poisoned, _extends({
}, {
    x: "ok",
    y: "2"
}));
// Error
var p1 = /*#__PURE__*/ React.createElement(Poisoned, _extends({
}, obj1));
var y = /*#__PURE__*/ React.createElement(Poisoned, null);
var z = /*#__PURE__*/ React.createElement(Poisoned, {
    x: true,
    y: true
});
var w = /*#__PURE__*/ React.createElement(Poisoned, _extends({
}, {
    x: 5,
    y: "2"
}));
var w1 = /*#__PURE__*/ React.createElement(Poisoned, _extends({
}, {
    x: 5,
    y: "2"
}, {
    X: "hi"
}));
export { };
