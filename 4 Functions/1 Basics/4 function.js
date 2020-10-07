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
