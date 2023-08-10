import { Component } from "react";
class ClassEvent extends Component {
  handleClick() {
    console.log("Class Based Event Handling");
  }
  render() {
    return (
      <div>
        <h3>This is a class based event handling</h3>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default ClassEvent;
