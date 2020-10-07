const arrowFunction = () => {
  throw new Error('bla!')
}

const anonymousFunction = function() {
  throw new Error('bla!')
}

function namedFunction() {
  throw new Error('bla!')
}

function receiveFun(fun) {
  fun();
}

const throwError = receiveFun(arrowFunction);
console.log(throwError); // good: receive logging at arrowFunction