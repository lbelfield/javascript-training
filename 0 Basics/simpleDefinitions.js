// Prototype: 
// globally extends a data-structure in one place, rather than 100 times like an object
// C# equivalent - Extension Method
// 1, 2

// Polyfill: 
// concept -> Browser compatibility ->
// The polyfill extends the prototype for the browsers that are behind
// 2

// Callback: 
// Function Inside a Function

// Passing functions around just as a normal value

// Functional:
// JS is a Functional language. Piping API Functions make it functional

// Procedural:
// list of instructions to tell the computer what to do step by step

// Context - this
// Scope - variables

// Middleware:
// FIFO queue of tasks. 
// Each and every one of those tasks are a middleware.
// Three parameters: req, res, next() 
// Middleware gives you access to req and res in the apps request->response cycle.
// https://medium.com/@jamischarles/what-is-middleware-a-simple-explanation-bb22d6b41d01
// Middlewares allow you to:
  // 1. Make changes to the request and the response objects.
  // 2. End the request-response cycle.
  // 3. Call the next middleware function in the stack.
// If the current middleware function does not end the request-response cycle, 
// then it must call next() to pass control to the next middleware function. 
// Otherwise, the request will be left hanging.

// DOM (Document Object Model):
// The DOM is an object {} representation of the HTML in a tree structure
// and can be manipulated.

// Hooks - Decouple BLL from rendering without multiple components. Components should be a rendering concern.
// Decouple => BLL to hooks. rendering to components.
// Hooks - Allow you to do complex things wthout making your tree to be complex

// Context - 
// Context provides a way to pass data through the component tree 
// without having to pass props down manually at every level.