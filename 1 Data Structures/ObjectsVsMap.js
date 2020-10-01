// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373

// Object Fundamentals:
// Object has a key inside it called a PROTOTYPE.
// Prototype is used for inheritance.
// ES2016 introduced Classes which are better for Inheritance and make use of Prototype.
// Class inherits from its base class, Object
// Prototype needs to be declared before the instance is called.

// Functions and space:
// object has the function 'add1Year()' at the object level
// Class has the function 'add1Year()' at a Prototype level
// So if we have 1,000 instances of object, we have 1,000 instances of 'add1Year()'
// If we have 1,000 instances of a class, we have 1 instance of 'add1Year()' nested in the prototype
// We can see the prototype in the Dev Console of Google Chrome
// So classes much better for memory than object.

class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // change of state...
  add1Year() {
    this.age += 1;
  }
}

const userObject = {
  name: 'luca',
  age: 29,
  add1Year() {
    this.age += 1;
  }
};

const userClass = new UserClass('luca', 29);

userObject.add1Year();
userClass.add1Year();

// Class inherits from its base class, Object
console.log('Class inherits from its base class, Object');
console.log('userObject is typeof ', typeof userObject);
console.log('userClass is typeof', typeof userClass);

// We see in the console, 
console.log('userObject; shows the Function add1Year()', userObject);
console.log('userClass; hides the Function add1Year() in the prototype', userClass);





// Object vs Map
// Before classes, having functions at an object item level impacted performance
// Object.create(null) was a way to hack prototype and create an empty object
// Map was created by ES2016 to create an empty (non-prototype) Object

// Differences:
// Objects can only hold simple strings. Prototype.
// Map can hold object reference. No prototype.

// Accessing items (using get)

// Add items (using set)
// Both performs theoretically in O(1).
// Retrieving a key doesn’t require to scan through all of data.

// Delete items
// Both Map and Object performance in removing element is similar.
// Deleting a key will take O(1), while clearing out all elements will still take O(n).
// So, yeah, it’s definitely a tie here!

const userObject = {
  name: 'luca',
  age: 29,
  add1Year() {
    this.age += 1;
  }
};

userObject.add1Year();
console.log("userObject", userObject);


// Hack: empty Object excluding prototypes
var objectExcludingPrototype = Object.create(null); 
console.log("objectExcludingPrototype", objectExcludingPrototype);


const searchCache = new Map();
// add items
const arr = [{}, {}];
searchCache.set(userObject, arr); // to prove can add complex types

// retrieve items
searchCache.get(userObject);

console.log("map", searchCache);
