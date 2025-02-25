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
var A1;
(function(A) {
    var Point = function Point() {
        "use strict";
        _classCallCheck(this, Point);
    };
    A.Point = Point;
    A.Origin = {
        x: 0,
        y: 0
    };
    var Point3d = /*#__PURE__*/ function(Point) {
        "use strict";
        _inherits(Point3d, Point);
        function Point3d() {
            _classCallCheck(this, Point3d);
            return _possibleConstructorReturn(this, _getPrototypeOf(Point3d).apply(this, arguments));
        }
        return Point3d;
    }(Point);
    A.Point3d = Point3d;
    A.Origin3d = {
        x: 0,
        y: 0,
        z: 0
    };
    var Line = function Line(start, end) {
        "use strict";
        _classCallCheck(this, Line);
        this.start = start;
        this.end = end;
    };
    A.Line = Line;
})(A1 || (A1 = {
}));
