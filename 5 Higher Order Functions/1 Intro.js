// use cases middlewares

// like overloading - pre-populating parameters
// similar to bind, but more easily recognised (people wouldn't expect this in bind)
// Basically the same as two functions chained

// Think generics in C# - the first parameter is like a loosely typed function

// Higher Order Function
const percentageOf = (percentage) => (number) => {
  return number * (percentage / 100);
};

// Note the above HOF is the same as writing this...
const anotherWayOfWritingPercentageOf = (percentage) => {
  return (number) => {
    return number * (percentage / 100);
  }
};

// 1 
// one way to call (super generic)
percentageOf(30)(7);

// 2 
// Another way to call where we pre-populate the first parameter; percentage = 30
// This makes it re-usable 
const calculate30PercentOf = percentageOf(30);
console.log(calculate30PercentOf(7));
