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

// 定义一个组件，通过React.Children 拿到组件里面的子元素
var ListComponent = function (_Component) {
    _inherits(ListComponent, _Component);

    function ListComponent() {
        _classCallCheck(this, ListComponent);

        return _possibleConstructorReturn(this, (ListComponent.__proto__ || Object.getPrototypeOf(ListComponent)).apply(this, arguments));
    }

    _createClass(ListComponent, [{
        key: 'render',
        value: function render() {
            console.log(this);
            return _react2.default.createElement(
                'ul',
                null,
                _react2.default.Children.map(this.props.children, function (c) {
                    return _react2.default.createElement(
                        'li',
                        null,
                        c
                    );
                })
            );
        }
    }]);

    return ListComponent;
}(_react.Component);

var UseChildrenComponent = function (_Component2) {
    _inherits(UseChildrenComponent, _Component2);

    function UseChildrenComponent() {
        _classCallCheck(this, UseChildrenComponent);

        return _possibleConstructorReturn(this, (UseChildrenComponent.__proto__ || Object.getPrototypeOf(UseChildrenComponent)).apply(this, arguments));
    }

    _createClass(UseChildrenComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                ListComponent,
                null,
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Facebook'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Google'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'SpaceX'
                )
            );
        }
    }]);

    return UseChildrenComponent;
}(_react.Component);

exports.default = UseChildrenComponent;

//# sourceMappingURL=ChildrenDemo-compiled.js.map