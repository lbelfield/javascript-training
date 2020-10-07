// How many different ways can I call a function?
// 4

// Function is a value. Nothing special.

// Passing functions around just as a normal value.

// IIFE and classes... forget about it︀

const arrowFunction = () => {
  throw new Error('bla!')
}

// anonymousFunction
const anonymousFunction = function() {
  throw new Error('bla!')
}

function namedFunction() {
  throw new Error('bla!')
}

// We call in the same way:
arrowFunction();
anonymousFunction();
namedFunction();

// We can pass a function as a value. Simples.
function receiveFun(fun) {
  fun();
}