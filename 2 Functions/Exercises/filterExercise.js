// Build a filter function which filters an array 
// and returns the new array filtered (it exists already in js).
// The api should look the same as this 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// prototype: globally extends a data-structure in one place

// create a prototype so that we can access customFilterer on the array
// customAnonymousFilter is an anonymous function created by coder; passing functions as values 
Array.prototype.customFilterer = function(customAnonymousFilter) {
  const newArray = [];

  // use the 'this' keyword to access the array
  this.forEach(item => {
    // apply filter
    if(customAnonymousFilter(item)){ // === true
      // add filtered items to the new array
      newArray.push(item);
    }
  })
  return newArray;
}

const isWordSprayOrElite = words.customFilterer(x => x === 'spray' || x === 'elite');
const includesAnE = words.customFilterer(x => x.includes('e'));
const includesAnA = words.customFilterer(x => x.includes('a'));

console.log('Array isWordSprayOrElite = ', isWordSprayOrElite);
console.log('Array includesAnE = ', includesAnE);
console.log('Array includesAnA = ', includesAnA);

// Took me roughly 30 mins :D