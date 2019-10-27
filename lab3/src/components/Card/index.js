import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const userName = "Bi";
    console.log(this.props);
    return (
      <div className="card">
        {this.props.content}
        <p>{this.props.number}</p>
      </div>
    );
  }
}

export default Card;
