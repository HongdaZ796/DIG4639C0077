import React, { Component } from "react";
import Card from "../Card/index";
import CardData from"./data.json";

class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: CardData,
            cards: []
        };
        this.setData();
    }

    setData = () => {
        const cardList = this.state.data.cards;
        const cards = this.state.cards;
        cardList.forEach(card => {
            cards.push(card);
        });
        console.log(cards);
    }

    handleDelete = (cardTitle) => {
        const localCards = this.state.cards.filter(card => card.title != cardTitle);
        this.setState({cards: localCards});
    }

    render() {
        const {cards} = this.state;
        console.log({cards});
        return(
            <div>{cards.map((card, index) => <Card key={index} card={card} onDelete={this.handleDelete}></Card>)}</div>
        );
    }
}

export default CardList;