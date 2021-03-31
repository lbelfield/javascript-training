// Anonymous function is useful when defining contracts
// Sort is an example where we are using a delegate where we
// let the consumer of the function decide how to get what they want.
// People define the contracts within documentation.

console.log([1,5,2,9,0,99].sort((a, b) => a-b))

// is much more terse than...
const arr = [1,5,2,9,0,99];
const compareFunction = (item1, item2) => {
  return item1 - item2;
}
console.log(arr.sort(compareFunction));