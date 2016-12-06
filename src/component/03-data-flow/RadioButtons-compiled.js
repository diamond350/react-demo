"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 定义单选框按钮组
var RadioButtons = function (_Component) {
    _inherits(RadioButtons, _Component);

    function RadioButtons() {
        _classCallCheck(this, RadioButtons);

        return _possibleConstructorReturn(this, (RadioButtons.__proto__ || Object.getPrototypeOf(RadioButtons)).apply(this, arguments));
    }

    _createClass(RadioButtons, [{
        key: "saySomething",
        value: function saySomething() {
            alert("我是一个很棒的单选框按钮组");
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "span",
                null,
                "A",
                _react2.default.createElement("input", { onChange: this.props.handleRadio, name: "goodRadio", type: "radio", value: "A" }),
                "B",
                _react2.default.createElement("input", { onChange: this.props.handleRadio, name: "goodRadio", type: "radio", defaultChecked: true, value: "B" }),
                "C",
                _react2.default.createElement("input", { onChange: this.props.handleRadio, name: "goodRadio", type: "radio", value: "C" })
            );
        }
    }]);

    return RadioButtons;
}(_react.Component);

exports.default = RadioButtons;

//# sourceMappingURL=RadioButtons-compiled.js.map