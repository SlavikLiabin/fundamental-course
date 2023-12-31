import React, { Component } from "react";

export default class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this)

    }

    decrement() {
        this.setState({count: this.state.count - 1})
      }
    
    increment() {
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
