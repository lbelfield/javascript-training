// Procedural (OOP, imperative) vs Functional (declarative) Programming
// see Chapter x

// Procedural Programming (RP)
  // Focus on performance
  // class describes an entity
    // ...therefore it has State
  // eg loops



// Functional Programming (FP)
  // Focus on readability
  // input/output
  // Think mathematical functions
  // piping (there can only be one output) (not an entity, it's a process) 
    // ... therefore No State
    // piping (.trim() and .toUpperCase() know nothing about each other, but can be combined)
  // functions can be arguments (passing functions as values, ch4)
  // eg .map(), .trim(), JS API, LINQ etc

  // currying (curried functions) 
    // takes multiple arguments, where the arguments are done one at a time
    // nested functions
    // higher-order functions and call/bind/apply can be examples of curried functions
    // Pre-filling arguments
    // Example Scenario: 
      // creating a VAT function for many countries; 
      // the logic is DRY regardless of the input VAT percent argument.



// Reactive Programming
  // Observable Pattern (Behavioral Gang of Four Pattern)
  // Any time we change an input, we get a new stream.
  // Listening to events (subscribing, event listeners etc)
  // Triggers automatically
  // We don't need to explicity call the function, the system controls when the value needs to be recalculated
    // Once declared that subscribed to a stream, triggers. 
    // Globally declared (eg in bootstrap)
  // Stream gets new values whenever there is a change
    // Scenario Example: 
    // sum, then multiply by two after. If arguments change, value needs to change aswell
    // when a,b changes, whole process re-runs




// RxJS uses a Functional Reactive Programming

// Functional Reactive Programming 
  // Describe what needs to happen when
  // Observable pattern