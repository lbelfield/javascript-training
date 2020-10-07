// What is null though? Null = this.

// 1
function sum(a, b) {
  return a + b + this;
}

const sumThisAnd10And29 = sum.bind(1, 10, 29); // this = 1, a = 10, b = 29
sumThisAnd10And29();
console.log("sumThisAnd10And29", sumThisAnd10And29());


// 2

function sum(a, b) {
  return a + b + this.num;
}

const sumThisAnd10And29 = sum.bind({ num: 1 } , 10, 29); // this = 1, a = 10, b = 29
sumThisAnd10And29();
console.log("sumThisAnd10And29", sumThisAnd10And29());

