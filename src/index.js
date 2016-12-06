'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Demo from './component/index.js';


let rootElement =document.getElementById('app');
/* 01* */
//ReactDOM.render(<Demo.Clock />,rootElement );


/* 02 *
 const comment = {
 date: new Date(),
 text: 'I hope you enjoy learning React!',
// text: {},
 author: {
 name: 'Hello Kitty',
 avatarUrl: 'http://placekitten.com/g/64/64'
 }
 };

 */


//ReactDOM.render(<Demo.Comment date={comment.date} text={comment.text} author={comment.author}/>, rootElement);

//2.传递多个参数
/*ReactDOM.render(<Demo.Comment {...comment}/>, rootElement);*/
/*
3.传递参数类型错误报错
ReactDOM.render(<Demo.Comment text={comment.text}/>, rootElement);
warning.js:36Warning: Failed prop type: Invalid prop `text` of type `object` supplied to `Comment`, expected `string`.
    in Comment*/

//4. 通过React.Children渲染 props
/*
ReactDOM.render(<Demo.UseChildrenComponent {...comment}/>, rootElement);*/


//5. 了解input组件写法
ReactDOM.render(<Demo.InputDemo />, rootElement);


ReactDOM.render(<Demo.FormApp />, rootElement);