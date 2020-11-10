// Not massively used, as people prefer composition over inheritance
// REMEMBER: Everything and anything is public for classes as last exercise!!
// There is no private members in classes

class BaseCounter {
  constructor(start = 0) {
    this.count = start;
  }
  incrementCount(incrementOf = 1) {
    console.log('BaseCounter', this.count);
    this.count += incrementOf;
  }
  getCount() {
    return this.count;
  }
}

// 1 ------------------------
// Base Class

const baseCounter = new BaseCounter();
baseCounter.incrementCount();
baseCounter.incrementCount();
baseCounter.incrementCount();
console.log(baseCounter.getCount()); 
// > 3


// 2 ------------------------
// Derived Class

class RandomCounter extends BaseCounter {
  incrementCount() {
    console.log('RandomCounter', this.count);
    const rand = rand1to10();
    // super calls the base class' incrementCount()
    super.incrementCount(rand);
  }
}

const randCounter = new RandomCounter(5);
console.log(randCounter.getCount());
// > 5

randCounter.incrementCount();
// Note: randCounter has access to the Base Class' context (ie this.count)
// > RandomCounter 5
// > BaseCounter 5

console.log(baseCounter.getCount());
// > 6



// 3 ----------------------------------
// Derived Class with new constructor (via super())

class CoefficientCounter extends BaseCounter {
  // Note: this will overload and overwrite the base class' constructor.
  // No overloading in JavaScript (unlike C#). So any ctor here will override any ctor in base
  constructor(start, coefficient = 1) {
    // super calls the base class' constructor
    super(start);
    this.coefficient = coefficient;
  }
  incrementCount(incrementOf = 1) {
    console.log('CoefficientCounter', this.count);
    super.incrementCount(incrementOf * this.coefficient);
  }
}

const coefficientCounter = new CoefficientCounter(5, 2);
console.log(coefficientCounter.getCount());
// > 5

coefficientCounter.incrementCount();
// > CoefficientCounter 5
// > BaseCounter 5

console.log(coefficientCounter.getCount());
// > 7


// 4 -------------------------------------

const increment = (counter) => {
  // can check the type of counter
  if (!(counter instanceof BaseCounter)) {
    return;
  }
  counter.incrementCount();
};

increment(coefficientCounter); // invokes counter.incrementCount();
increment(randCounter);        // invokes counter.incrementCount();
increment({});                 // returns

// 5 ----------------------------------- REAL LIFE
const errorHandler = (error) => {
  if (error instanceof NotError) {
  }
}