"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attribute = void 0;
var _stream = _interopRequireDefault(require("mithril/stream"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // Generated by CoffeeScript 2.7.0
var Attribute = function () {
  var Attribute = /*#__PURE__*/function () {
    function Attribute(attrs) {
      _classCallCheck(this, Attribute);
      this.value = this.value.bind(this);
      this.kind = (0, _stream["default"])();
      this._value = (0, _stream["default"])(null);
      this.errors = (0, _stream["default"])([]);
    }
    _createClass(Attribute, [{
      key: "value",
      value: function value(_value) {
        if (_value === void 0) {
          return this._value();
        } else if (typeof _value === 'string' && _value.trim() === '') {
          return this._value(null);
        } else if (_value === null) {
          return this._value(null);
        } else {
          return this._value(_value);
        }
      }
    }]);
    return Attribute;
  }();
  ;
  Attribute.prototype._attribute_type = 'Attribute';
  return Attribute;
}.call(void 0);
exports.Attribute = Attribute;