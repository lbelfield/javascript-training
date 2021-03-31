// What if we wanted to have two of the same components that hold independent state on a page?
// for example, two independent counter buttons that have different values stored
// We could violate SRP and do two different components, with the same code, but bad design. Want re-use

// There are three main options:
// 1. Mixins (like Inheritance)
// 2. Higher Order Components
// However, there are big flaws with both

// 3. Custom Hooks
// Custom Hooks - prefix with `use` (like useEffects or useState)
// 
// think of it as a contract vs consumer
// Hooks are atomic
// Custom hooks are also atomic



// Example: 
// Two independent buttons:

//contract: useCounter.js
import { useState } from "react";

const useCounter = (startFrom = 0, step = 1) => { // two default params. step = multiplier when click
  const [count, setCount] = useState(startFrom);  // still useState

  const increment = () => { // our function that sets the state
    setCount(count + step);
  };

  const decrement = () => { // our function that sets the state
    setCount(count - step);
  };

  // Similar to useEffects. We use an array to expose our dependencies
  // Like a mini api in the array.
  return [count, increment, decrement];
};

export default useCounter;




// consuming: counterInline.js
// Our First Independent Button Counter
import useCounter from "./useCounter";

const CounterInline = () => {
   // We use our Custom Hook very similar to useState(), where we set the value in the parameters.
  // we can call our count variable or increment function anything we want.
  // This state will be completely independent from the next counter, as it has it's own JSX (View)
  const [count, increment] = useCounter(0); // startFrom = 0

  return (
    <>
      <span>{count}</span>&nbsp;&nbsp;
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
    </>
  );
};

export default CounterInline;


// consuming: counter.js
// Our Second Button Counter
import useCounter from "./useCounter";

const Counter = () => {
   // We use our Custom Hook very similar to useState(), where we set the value in the parameters.
  // we can call our count variable or increment function anything we want.
  // This state will be completely independent from the next counter, as it has it's own JSX (View)
  // We've gone further in this example, and created TWO useCounters in this file 
  // (note: this is unnecessary for this example, but proving we can call our variables anything)
  const [count, increment] = useCounter(0); // startFrom = 0
  const [count2, increment2] = useCounter(2, 2); // startFrom = 2, step = 2

  return (
    <>
      <button
        onClick={() => {
          increment();
          increment2();
        }}
      >
        {count} - {count2}
      </button>
    </>
  );
};

export default Counter;


