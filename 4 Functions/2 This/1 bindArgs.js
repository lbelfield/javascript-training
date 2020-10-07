function sum(a, b) {
  return a + b;
}

// 1
// can easily call
const sum1And2 = sum(1, 2);
console.log("sum1And2", sum1And2);


// 2
// Every function has a bind in the prototype.
// bind helps manage the 'this' keyword:
// Function.protoype.bind()

const sumTo10 = sum.bind(null, 10); // a = 10. sumTo10 will now be set as a=10 as changing prototype
sumTo10(35)
console.log("sumTo10", sumTo10());

// 3
const sum10To20 = sum.bind(null, 10, 20); // a = 10, b = 20
sum10To20();
console.log("sum10To20", sum10To20());
