import React,{ Component } from 'react';
class Comment extends Component{
    constructor(props){
        super(props);
      console.log(this);
    }

    render(){
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img className="Avatar"
                         src={this.props.author.avatarUrl}
                         alt={this.props.author.name} />
                    <div className="UserInfo-name">
                        {this.props.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date.toLocaleDateString()}
                </div>
            </div>
        );
    }

}
//设置默认props,在没有传递参数时
Comment.defaultProps = {
    date: new Date(),
    text: 'undefined',
    author: {
        name: 'admin',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

//设置传递参数类型
Comment.propTypes = {
    text: React.PropTypes.string.isRequired
}
export default Comment;
