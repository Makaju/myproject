import { Component} from "react";
class Message extends Component{
    render(){
        return <h2>This is a class component {this.props.message}</h2>;
    }
}
export default Message;
