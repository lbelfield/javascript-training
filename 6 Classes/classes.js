// classes is for encapsulation (private, public, members)

// Everything and anything public
// There is no such thing as private members in JavaScript.
// Only hacks around private members to encapsulate
// Anytime you use 'this' is in memory as per how many instances you have

// classes are syntactical sugar for prototypes.
// OOP behaviour
// function with a constructor and extending the ctor which are getting injected to the prototype
// can reuse. not in memory for the instance. Shared bucket memory.
// eg don't create 1000 times.

// name, lastname, email - specific to the instance. eg 10 instances, then 10 in memory.
// name, lastname, email - if string concat to build email, then prototype to save memory - exists only once in memory.

// Scope (variables in and out of memory) and Context (this)
// Memory leak potential

// history:
// Darus Crawford - founder of JS, JSON, Yahoo
// problem with prototype - no private members.
// A way around this in JS is to mark private members with _ (listed as # below)
// _ telling the consumer that this a private variable


// classes 
// less secure, but uses prototype under the hood, so more optimised, eg 1 memory

class User {
    constructor(name, lastname, email) {
        this.#name = name;
        this.#lastname = lastname;
        this.#email = email;

        // 1000 in memory as adding a this
        this.getName = () => {
            return this.name;
        };
    }
    // 1 in memory as prototype
    getName() {
      return this.name;
    }
}

const luca = new User('Luca', 'Colonnello', 'luca.colonnello@thetrainline.com');
luca.name // > Luca
luca.lastname // > Colonnello
luca.getName() // > Luca

const luke = new User('Luke', 'Belfield', 'luke.belfield@thetrainline.com');


// Module Pattern - Darus Crawford - old solution (not convention now - ditched to go to ES6)
// private capable User class
// more secure, but less optimised, eg 1000 memory
// Similar to a factory

function createUser(name, lastname, email) {
  let _name = name;
  let _lastname = lastname;
  let _email = email;

  // let user = {};
  // user.getName = function() {
  //   return _name;
  // };
  // user.getFullName = function() {
  //   _name
  // };
  // return user;


  return {
    getName() {
      return _name;
    },

    setName(n) {
      return _name = n;
    }
  };
}

const luca = createUser('Luca', 'Colonnello', 'luca.colonnello@thetrainline.com');
luca._name // > undefined
luca._lastname // > undefined
luca.getName() // > Luca - the object contains a getName() which returns the _name.
luca.setName('Luke')
luca.getName() // > Luke

// Scope for private members.
// The variables are referenced, so the GC can't kill them.
// When luca object is killed, then the variables can be killed too.
// If you create 1000 luca objects, then you will create 1000 in memory
