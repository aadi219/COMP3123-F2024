import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    return(
      <div style={{color: "red"}}>Greetings, {this.props.name}</div>
    )
  }
}
