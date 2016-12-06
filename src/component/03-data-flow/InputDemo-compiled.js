'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputDemo = function (_Component) {
    _inherits(InputDemo, _Component);

    function InputDemo() {
        _classCallCheck(this, InputDemo);

        //设置value初始值
        var _this = _possibleConstructorReturn(this, (InputDemo.__proto__ || Object.getPrototypeOf(InputDemo)).call(this));

        _this.state = { value: "默认值 " };
        //用es5写方法，在外部调用时会有this指向问题,使用es6箭头函数的话 this始终指向类实例
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        // this.handleChange = this.handleChange.bind(this);
        return _this;
    }
    /*handleChange(event){
        console.log(event);
        this.setState({value:event.target.value});
    }*/

    _createClass(InputDemo, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
                ),
                _react2.default.createElement('input', { type: 'submit', value: '\u63D0\u4EA4' })
            );
        }
    }]);

    return InputDemo;
}(_react.Component);

exports.default = InputDemo;

//# sourceMappingURL=InputDemo-compiled.js.map