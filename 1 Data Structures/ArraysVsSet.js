// https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a

// Problem Scenario:
// Example:
// Array of users. Find if user x is in list or not. IndexOf() or includes()
// Array is a big, complex data structure with many API functions.
// Hash set is a smaller, better perf data structure. Optimised to do just this. Better for GC.
// Not a problem if small array. Problem if 10,000 items (then hash better option)

// ES2016 introduced new Data Structures:
// Set is JS's solution for a smaller, optimal array


const luca = { name: 'luca' }
const luke = { name: 'luke' };
const juan = { name: 'juan' };

// Array is index based with many API functions. 
// Eg it has to have a length, and indexOf etc.
// Very useful for <1,000 items, perf issues and bloated if more.
const usersArray = [];
usersArray.push(luca, juan, luca, luke, luke, juan, luke);

// Set is more like a linked list; it is keyed based.
const usersSet = new Set();
// IMPORTANT: Sets have DISTINCT values. Therefore no duplicates (eg you cannot have two Luke in a user)
// Set inserts/deletes are super quick because implemented by hash tables (O(1) not O(n)).
usersSet.add(luca); 
usersSet.add(juan); 
usersSet.add(luca); 
usersSet.add(luke);
usersSet.add(luke);
usersSet.add(juan);
usersSet.add(luke);

console.log('Array', usersArray);
console.log('Set', usersSet)
console.log('convert array to set and distinct values', Array.from(usersSet));
