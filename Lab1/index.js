const Entry = require('./Entry.js');
const chalk = require('Chalk');

let entry = new Entry(
  {
    word: "world"
  }
);

console.log(entry.render());
