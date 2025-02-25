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
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var Animal = function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function Animal() {
        _classCallCheck(this, Animal), this._sound = "rustling noise in the bushes";
    }
    return Constructor = Animal, protoProps = [
        {
            key: "sound",
            get: function() {
                return this._sound;
            },
            set: function(val) {
                this._sound = val;
            }
        },
        {
            key: "makeSound",
            value: function() {
                console.log(this._sound);
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Animal;
}();
(new Animal).makeSound();
var Lion = function(Animal) {
    "use strict";
    function Lion() {
        var _this, self, call, obj;
        return _classCallCheck(this, Lion), self = this, call = _getPrototypeOf(Lion).apply(this, arguments), (_this = call && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self)).sound = "RAWR!", _this;
    }
    return !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(Lion, Animal), Lion;
}(Animal);
(new Lion).makeSound() // with [[Define]]: Expected "RAWR!" but got "rustling noise in the bushes"
;
