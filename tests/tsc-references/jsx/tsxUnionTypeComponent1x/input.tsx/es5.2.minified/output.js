function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
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
}, React = require("react"), MyComponent = function(_Component) {
    "use strict";
    var Constructor, protoProps, staticProps;
    function MyComponent() {
        return _classCallCheck(this, MyComponent), _possibleConstructorReturn(this, _getPrototypeOf(MyComponent).apply(this, arguments));
    }
    return _inherits(MyComponent, _Component), Constructor = MyComponent, protoProps = [
        {
            key: "render",
            value: function() {
                var AnyComponent = this.props.AnyComponent;
                return React.createElement(AnyComponent, null);
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), MyComponent;
}(React.Component);
React.createElement(MyComponent, {
    AnyComponent: function() {
        return React.createElement("button", null, "test");
    }
});
var MyButtonComponent = function(_Component) {
    "use strict";
    function MyButtonComponent() {
        return _classCallCheck(this, MyButtonComponent), _possibleConstructorReturn(this, _getPrototypeOf(MyButtonComponent).apply(this, arguments));
    }
    return _inherits(MyButtonComponent, _Component), MyButtonComponent;
}(React.Component);
React.createElement(MyComponent, {
    AnyComponent: MyButtonComponent
});
export { };
