// A unit test may require you to change the state within the component.
// This is bad, because even though you can do it...
// Running the assumption that this state will always be there, but it won't
// If the state changes, doesn't mean the component is breaking

// One to one map with implementation and test

// We want to control parts of the component to test it (a Unit Test)
// When specific conditions change, we expect a specific render
// Which ways can a component change?
  // 1 Props
  // 2 State
// We therefore want to test all the combinations of props and state,

// props are easy because they are input
// state is hard because it changes externally
// so how do we test a state change?

// Enzyme old method:
// Don't test private methods for unit testing in OOP
// Similar to React. Enzyme: gives control of the internals (props and state)
// A change is coming from the user input. Very hard to simulate a user input in a Unit Test!
// Enzyme gave the possibility: ignore the reason why user-input changes
  // Bad because unreliable

// If test is concerned with user input, then won't be safe
// If test isn't concerned with user input, then will be safe
// (eg sticky header. If user scrolls, expect x => not safe)

// Key Question:
// So How Do We Do This without a Browser Environment?
  // React Testing Library

// React Testing Library
  // Simulate the end user, without a browser
  // Feels like an end to end test
  // Newest features: eg hooks, etc. Enzyme not fully compatible with these newer features

// How does React Testing Library work?
  // You have a Wrapper and you mount a component inside
  // Can test post-render with getters
  // getters query the DOM element (like you do in the DOM)
  // (API is similar to enzyme in this way)
  // React Testing Library doesn't allow you to look at your tree as it's a simulation; 
    // because you're looking at it from a user pov
  // Can test hooks too :D


  // With beforeEach, you should be able to comment the rest of the file.
  // The tests are Unit Tests, hence they should be isolated.
  // Imagine you are refactoring, then you want to remove a feature, should be able to delete the
  // pertinent tests and not touch multiple, unrelated tests.
  