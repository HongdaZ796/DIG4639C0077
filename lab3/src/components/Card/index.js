import React, { Component } from 'react';
import './index.css';

class Card extends Component {
    render() {
        return (
            <div className="card">{this.props.content}</div>
        );
    }
}

export default Card;