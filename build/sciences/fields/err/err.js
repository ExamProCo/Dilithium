"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMsg = void 0;

var _mithril = require("mithril");

var _component = require("./../../../operations/component/component.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Generated by CoffeeScript 2.5.1
var boundMethodCheck = function boundMethodCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error('Bound instance method accessed before binding');
  }
};

var ErrorMsg = function () {
  var ErrorMsg = /*#__PURE__*/function (_Component) {
    _inherits(ErrorMsg, _Component);

    var _super = _createSuper(ErrorMsg);

    function ErrorMsg() {
      var _this;

      _classCallCheck(this, ErrorMsg);

      _this = _super.apply(this, arguments);
      _this.render = _this.render.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ErrorMsg, [{
      key: "render",
      value: function render() {
        var err;
        boundMethodCheck(this, ErrorMsg);

        if (!(this.errors().length > 0)) {
          return;
        }

        return (0, _mithril.m)('.err_msg.err', function () {
          var i, len, ref, results;
          ref = this.errors();
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            err = ref[i];

            if (this.overrides && this.overrides[err]) {
              results.push((0, _mithril.m)('.err', this.overrides[err]));
            } else {
              results.push((0, _mithril.m)('.err', "".concat(this.title, " ").concat(err)));
            }
          }

          return results;
        }.call(this));
      }
    }]);

    return ErrorMsg;
  }(_component.Component);

  ;
  ErrorMsg.prototype.expects = {
    errors: true,
    title: true,
    overrides: {
      allow_nil: true
    }
  };
  return ErrorMsg;
}.call(void 0);

exports.ErrorMsg = ErrorMsg;