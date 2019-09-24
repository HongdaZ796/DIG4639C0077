import Element from "./Element.js";
import Card from "./components/Card/index.js";


console.log('// DEBUG: ');
let card = new Card({content: "This is a card"});
let element = new Element("div");

element.render(card.render());
