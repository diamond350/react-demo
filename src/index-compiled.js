'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('./component/index.js');

var Demo = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootElement = document.getElementById('app');
/* 01* */
_reactDom2.default.render(_react2.default.createElement(Demo.Clock, null), rootElement);

/* 02 * */
var comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  /*  text: {},*/
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
//ReactDOM.render(<Demo.Comment date={comment.date} text={comment.text} author={comment.author}/>, rootElement);

//2.传递多个参数
/*ReactDOM.render(<Demo.Comment {...comment}/>, rootElement);*/
/*
3.传递参数类型错误报错
ReactDOM.render(<Demo.Comment text={comment.text}/>, rootElement);
warning.js:36Warning: Failed prop type: Invalid prop `text` of type `object` supplied to `Comment`, expected `string`.
    in Comment*/

_reactDom2.default.render(_react2.default.createElement(Demo.UseChildrenComponent, comment), rootElement);

//# sourceMappingURL=index-compiled.js.map