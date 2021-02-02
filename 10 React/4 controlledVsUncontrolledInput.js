// controlled input

// Olden days:
// MVC and MVVM patterns
// Two-way binding (Angular and non-react frameworks)
    // 1 User changes data
    // 2 Data changes data
// For No control over . Lots of magic
// Very difficult to manage lots of changes and 
// The framework has to keep everything in sync
// Note in dotnet, V = Razor
// C -> M -> V
// C <- M <- V

// React said; no more magic. Unidirectional (One-way binding)
// In React, think of the View as the DOM -- VERY IMPORTANT
// no abstraction
// Controller renders the view
// No values getting automatically updated, unlike two-way
// Now have control over everything
// C -> V

// For Forms (eg input, checkbox, any type of listener), two types:
    // Uncontrolled Input    
    // Controlled Input
    // (note coincidence, input in HTML is a coincidence)

// if vanilla, this will work, because access DOM.
// if Framework (eg React), then it won't work, because the View (DOM) needs to have an input value

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input type="text" value="" />
    </div>
  );
}

// So need to do something like this in React:

import React from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = React.useState('');

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/*
        Uncontrolled input:
        - the input has no value (we don't force a value)
        - the user can write whatever, we don't block the user
        - THIS DOESN'T NEEDS TO WAIT
        - we can still listen to changes and use it
        - we can use state to save changes and render new things
      */}
      <input type="text" onChange={(e) => setText(e.target.value)} /> <br /><br />

      {/*
        Controlled input:
        - the input has value (we do force a value)
        - the user can write whatever, but the value is only updated by the app
        - THIS NEEDS TO WAIT
        - we need to listen to changes to update the value
        - we can use state to save changes, update the input value and render new things
        - if we don't manage the value via a state variable, the input will have no value in screen
      */}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <p>
        The input value has length: {text.length}
      </p>
    </div>
  );
}

