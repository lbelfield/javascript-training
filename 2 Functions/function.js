// how to write
// what can I do
// how many ways can I call a function
// prototype
// 

// function is a value. Nothing special.

// Passing functions around just as a normal value.

// PART 2

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

// arrowFunction();
// anonymousFunction();
namedFunction();



// IIFE and classes... forget about it︀





// PART 2

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

receiveFun(arrowFunction);









// PART 3

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

receiveFun(() => {
  throw new Error('bla!')
});








//PART 4

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


function runFun(run) {
  run();
}

function receiveFun(fun) {
  runFun(fun);
}

receiveFun(function a() {
  throw new Error('bla!')
});


