import React, { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0 
        };
    }

    inc = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1 
        }));
    };

    dec = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1 
        }));
    };

    render() {
      return (
        <div>
          <h1>{this.state.counter}</h1> 
          <button onClick={this.inc}>+</button> 
          <button onClick={this.dec}>-</button> 
        </div>
      );
    }
}

export default Counter;
