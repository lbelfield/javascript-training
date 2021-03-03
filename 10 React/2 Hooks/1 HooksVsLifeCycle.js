// Component Lifecycle

// ComponentDidMount:
// A constructor for the Component that is not related to rendering.

// Why not put it in a Component (functional or classes)?
// Because a Component should only be used for rendering (SRP)

// Think of a Component Lifecycle like a constructor (although much more powerful)

// Example:
// Opening a socket connection
// Nothing to do with rendering, but needs to be done when the component is ready

// Two ways to access a Component Lifecycle:
  // 1 Class Method: For classes (eg ComponentDidMount)
  // 2 Hooks: For functional

// KEY: Hooks are a way to do what you do in a class component with a functional component

// A Class Method has a very precise execution time in the rendering of the component.
// This is a different way than Hooks as it can only ever runs when React is in a certain phase.
// With hooks, you have more control on when to run, depending on which (state) values change

// in the past (pre-hooks), devs used to just create a class method and so would not go functional
