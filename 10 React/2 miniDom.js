import React, { useState } from "react";
import "./styles.css";

/*
  - var state = 0
  - click evt handler on + and -
    - increment / decrement state
    - document.getElementById('p_element').innerHTML = `Count: ${state}`
*/

export default function App() {
  // React Hook -> useState(): 
  // note, we pass 0 to set count = 0
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1); // -> call App again to re-render
  };
  const onDecrement = () => {
    setCount(count - 1); // -> call App again to re-render
  };

  return (
    <div className="App">
      <h1>Basic counter example</h1>
      
      {count !== 0 ? (<p>Count: {count}</p>) : null}

      <button onClick={onDecrement}>-</button> &nbsp;
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

// If jsx is split into two; state/code (line 1-20) and HTML (after return line 21-33)

// Each component has a mini DOM in the return (line 22-29)
// See in DevTools > Elements tab: elements get added/removed/replaced in real time after a user interaction
// when react does a state mutation (change in the DOM) it will do a diff and add/remove/replace the new change
// So you can think of each component as having a mini DOM that adds to the bigger DOM
// Think of perf for this...

// Every time there is a mutation, it will ALWAYS re-run the component's code (can check with console log)
// Whether there is a new state change that affects this component or not, we will always run the code in that component

// If the function mutating state (the first component to declare the state) then it will get re-rendered first.
// This is because the parent component OWNS the state (and uses the state hook).
// For example, if the state-change (setCount) is in the app, but is passed down to a child component,
// and called/used setCount in the child, then the first re-render will still be the App.
