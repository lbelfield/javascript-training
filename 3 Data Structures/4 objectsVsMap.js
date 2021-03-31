// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373

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
// Both Objects and Maps have key/value pairs

// Before classes, having functions at an object item level impacted performance
// Object.create(null) was a way to hack prototype and create an empty object
// Map was created by ES2016 to create an empty (non-prototype) Object

// Differences between Map vs Object:

// key (as in key/value pair):
// An Object's key has to be of type simple "string". 
// A Map's key can be of any type and hold any object reference.

// Prototype:
// Objects have Prototypes.
// Maps have no Prototype.


// Accessing items (using get())
// Retrieving a key doesn’t require to scan through all of data.

// Add items (using set())
// Both performs theoretically in O(1).

// Delete items
// Both Map and Object performance in removing element is similar.
// Deleting a key will take O(1), while clearing out all elements will still take O(n).
// So, yeah, it’s definitely a tie here!

const userObject = {
  name: 'luca',
  age: 29,
  1: 1,
  add1Year() {
    this.age += 1;
  }
};

userObject.add1Year();
console.log("userObject", userObject);


// Hack: empty Object excluding prototypes
var objectExcludingPrototype = Object.create(null); 
console.log("Hack: objectExcludingPrototype", objectExcludingPrototype);


const searchCache = new Map();
const arrayHoldsTwoObjects = [{hi: "hi"}, {hello: "hello"}];

// Use Map.set() to set a key/value pair
// to prove the key can be of any complex types (ie not string)
searchCache.set(userObject, arrayHoldsTwoObjects);
searchCache.set(1, 1); // important note that the key is 1, not '1'
searchCache.set({name: "Luke"}, [{}, {}]);

// Use Map.get() to get the value, using the key
// retrieve items
var get = searchCache.get(userObject);
console.log("get()", get);

console.log("Full Map()", searchCache);
