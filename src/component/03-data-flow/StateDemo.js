import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {date: new Date()};  //初始化state
      /* 设置默认值
      this.props = {
         title: '这是默认的title属性值'
         }
         */
      console.log(this);
    }

    //获取当前时间
    tick() {
        this.setState(  //使用setState修改
            {
                date: new Date()
            }
        );
    }

    //组件加载完成
    componentDidMount() {
        this.timer = setInterval(
            ()=>this.tick(), 1000
        );
    }

    //组件移除
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>);
    }
}

export default Clock;