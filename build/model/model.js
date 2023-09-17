"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;
var _stream = _interopRequireDefault(require("mithril/stream"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // Generated by CoffeeScript 2.7.0
var Model = /*#__PURE__*/function () {
  function Model() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Model);
    var k, ref, v;
    this.errors = this.errors.bind(this);
    // exclude - allows you to exclude params
    // eg. exclude: ['exams']

    // rename - allows you to change the name of the param
    // eg. rename: {exams: 'exam_ids' }
    this.params = this.params.bind(this);
    this.reset = this.reset.bind(this);
    this.id = (0, _stream["default"])(attrs.id || null);
    ref = this.attributes;
    for (k in ref) {
      v = ref[k];
      this[k] = v();
    }
  }
  _createClass(Model, [{
    key: "errors",
    value: function errors() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var k, results, v;
      results = [];
      for (k in attributes) {
        v = attributes[k];
        if (this[k]) {
          results.push(this[k].errors(v));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  }, {
    key: "params",
    value: function params() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attribute_fun, attrs, k, key, ref;
      attrs = {};
      attrs.id = this.id();
      ref = this.attributes;
      for (k in ref) {
        attribute_fun = ref[k];
        if (!!opts.exclude === false || opts.exclude && opts.exclude.indexOf(k) === -1) {
          // rename key
          key = opts.rename ? opts.rename[k] || k : k;
          switch (attribute_fun()._attribute_type) {
            case 'AttributeModelArray':
              attrs[key] = this[k].values();
              break;
            case 'AttributeArray':
              attrs[key] = this[k].values();
              break;
            case 'AttributeJson':
              attrs[key] = this[k].value();
              break;
            case 'Attribute':
              attrs[key] = this[k].value();
          }
        }
      }
      return attrs;
    }
  }, {
    key: "reset",
    value: function reset() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var k, ref, results, v;
      this.id(attrs.id || null);
      ref = this.attributes;
      results = [];
      for (k in ref) {
        v = ref[k];
        if (typeof attrs[k] === 'boolean' || attrs[k]) {
          results.push(this[k].value(attrs[k]));
        } else {
          results.push(this[k].value(''));
        }
      }
      return results;
    }
  }]);
  return Model;
}();
exports.Model = Model;