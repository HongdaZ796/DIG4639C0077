import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  render() {
    const {title, content} = this.props.card;
    // console.log(this.props);
    return (
      <div className="card">
        <span className="close" onClick={()=>this.props.onDelete(title)}>&times;</span>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default Card;
