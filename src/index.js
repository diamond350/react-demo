import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';

// 定义组件
class SimpleComponent extends Component {
    render(){
        return (
            <div> Hello world </div>
        );
    }
}
let rootElement = document.getElementById('app');
// 组件渲染
ReactDOM.render(<SimpleComponent />, rootElement);
