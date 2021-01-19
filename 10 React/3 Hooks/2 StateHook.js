/*
1)
Tree:
- App
  - CountLabel
  - CountToolbar

React work pipeline (recursive calls):
- call App, get back tree
- are there any components?
  - yes: call components, one by one
    - call CountLabel passing count, get back tree
    - are there any components?
      - no: use the tree from CounLabel in the right position

React component call:
- First call ever
  - call App:
    - useState(1):
      - create a state var with initial value 1
      - associate the state with the App component

- After state mutation
  - call App:
    - useState(1):
      - use state var associated with App component


2)
Tree:
- App
  - CountLabel
  - CountToolbar

What React holds:
- App (state, current props, events, current vdom)
  - CountLabel (state, current props, events, current vdom)
  - CountToolbar (state, current props, events, current vdom)

In memory, React holds all things in memory that you want to render.
Eg if you have 1,000 items, React holds all 1,000 items in the tree.
To users, needs to give illusion that it is stateless, so that more functional
By having a "global like" variable (state), gives this illusion.
So users don't have control of the state, React does.
User not the owner!
You components are just a representation (like ReST). 
You are not doing the work, React is!

Hooks allow you to write in a stateless functional way, 
but it is completely stateful because React handles it.
You are in a controlled environment because React handles GC
and stops memory leaks etc from the "global like state".
      
*/

// Parent Class (app.jsx)

import React, { useState } from "react";
import CountLabel from "./CountLabel";
import CountToolbar from "./CountToolbar";

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(1);

  const onIncrement = () => {
    setCount(count + 1); // -> call App again to re-render
  };
  const onDecrement = () => {
    setCount(count - 1); // -> call App again to re-render
  };

  return (
    <div className="App">
      <h1>Basic counter example</h1>

      <CountLabel count={count} />
      <CountToolbar onDecrement={onDecrement} onIncrement={onIncrement} />
    </div>
  );
}

// Child Component: CountLabel.jsx
import React from "react";

export default function CountLabel({ count }) {
  if (count === 0) {
    return null;
  }
  
  return (
    <p>Count: {count}</p>
  );
}

// Child Component: CountToolbox.jsx
import React from "react";

export default function CountToolbox({ onIncrement, onDecrement }) {
  return (
    <>
      <button onClick={onDecrement}>-</button> &nbsp;
      <button onClick={onIncrement}>+</button>
    </>
  );
}
