// Component Lifecycle

// ComponentDidMount:
// A constructor for the Component that is not related to rendering.

// Why not put it in a Component:
// Because Components should only be used for rendering

// Example:
// Opening a socket connection
// Nothing to do with rendering, but needs to be done when the component is ready

// Two ways to access a Component Lifecycle:
// 1 Class Method: For classes (eg ComponentDidMount)
// 2 Hooks: For functional

// KEY: Hooks are a way to do what you do in a class component with a functional component

// useEffects() is used for functions
// It is like a constructor
// It calls the function that you pass every time the component gets mounted
// Call me whenever an update has been triggered

// useEffects() -> no array - run every time
// useEffects() -> value in array - boolean check to run if true