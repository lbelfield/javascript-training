// Immutable: 
// 1
// Spread Operator (...)
// drop objects inside objects at the same level
let a = [1,2,3];
let b = [a, 'h'];
let c = [...a, 'h'];
console.log('a', a);
console.log('b', b);
console.log('c', c);

// 2
// Object.assign()
// Merge Operation
// original + override returns a new object
let obj1 = { 
  a: 'a', 
  b: 'b' 
};

let obj2 = Object.assign({}, obj1, {b: 'z'});
console.log('obj1', obj1);
console.log('obj2', obj2);
