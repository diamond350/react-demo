import React,{Component} from 'react';
class InputDemo extends Component{
    constructor(){
        super();
        //设置value初始值
        this.state={value:"默认值 "}
        //用es5写方法，在外部调用时会有this指向问题,使用es6箭头函数的话 this始终指向类实例
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleChange = this.handleChange.bind(this);
    }
    /*handleChange(event){
        console.log(event);
        this.setState({value:event.target.value});
    }*/
    handleChange = (e) => {
       // console.log(e.target);  //获取的是改变的input对象
        this.setState({
            value: e.target.value,
        })
    }



    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="提交"/>

            </form>
        );
    }
}

export default InputDemo;