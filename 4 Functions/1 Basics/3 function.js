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

function receiveFun(fun) {
  fun();
}

// 1 
const throwError = receiveFun(function() {
  throw new Error('bla!')
});
console.log(throwError); // bad: receive no logging at anonymousFunction

// 2
const anonymousFunctionParameter = receiveFun(() => {
  throw new Error('bla!')
});
console.log(anonymousFunctionParameter); // bad: no logging again as anonymous function


