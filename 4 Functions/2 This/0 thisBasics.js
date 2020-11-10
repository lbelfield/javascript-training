// https://www.taniarascia.com/this-bind-call-apply-javascript/

// 1 Global
// In the global context, this refers to the global object. 
// - When you're working in a browser, the global context is window. 
// - When you're working in Node.js, the global context is global.

// 2
// Use in an Object Method. 
// A method is a function on an object
// Think of 'this' as america (the object on the leftside of the dot)
const america = {
  name: 'The United States of America',
  yearFounded: 1776,

  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  },
}
america.describe();

// Think of 'this' as details (the object on the leftside of the dot)
const america = {
  name: 'The United States of America',
  yearFounded: 1776, // undefined
  details: {
    symbol: 'eagle',
    currency: 'USD',
    printDetails() {
      console.log(
        `The symbol is the ${this.symbol} ${this.yearFounded} and the currency is ${this.currency}.`,
      )
    },
  },
}
america.details.printDetails()

// 3
// Use in a constructor (of a class):

class Country {
  constructor(name, yearFounded) {
    this.name = name;
    this.yearFounded = yearFounded;

    this.describe = function () {
      console.log(`${this.name} was founded in ${this.yearFounded}.`);
    };
  }
}

const americaCtor = new Country('The United States of America', 1776)
americaCtor.describe()

// 4
// A DOM Event Handler
// In the browser, there is a special 'this' context for event handlers. 
// In an event handler called by addEventListener, 'this' will refer to event.currentTarget. 
// More often than not, developers will simply use event.target or event.currentTarget 
// as needed to access elements in the DOM, 
// but since the 'this' reference changes in 'this' context, it is important to know.

// check: 3 usageOfBind.js