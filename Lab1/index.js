const Entry = require('./Entry.js');
const chalk = require('Chalk');

let entry = new Entry(
  {
    title: "Less (Winner of the Pulitzer Prize): A Novel",
    Author: "Abdrew Sean Greer",
    releaseD: "July 18, 2017",
    description: "Image result for Less (Winner of the Pulitzer Prize): A Novel description 'Less' is a gay book by a gay author that won the Pulitzer Prize for fiction in 2018. This, in the same year that a gay journalist, Ronan Farrow (age 30), won a Pulitzer for his work."
  }
);

console.log(entry.render());
