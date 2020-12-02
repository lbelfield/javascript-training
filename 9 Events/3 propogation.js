// jsbin.com

// 3: Propogation
// When you fire an event on any DOM element, it doesn't only invoke and pass data to your listener
// It does a whole load of other stuff in the background

// There are two main phases:
// 1. Capture Phase
// 2. Bubble Phase

// On Clicking
// 1. Create the Event
// 2. Capture Phase 
    // Top To Bottom
      // go from the very top parent element to all their child elements
      //  It will propogate from top to bottom until it reaches the element that subscribed to it
      // Eg hey button is clicked, want to do something; yes/no (next child element) hey button is clicked, want to do something; yes/no etc
// 3. Bubble Phase 
    // Bottom To Top
      // Bubbles Up (think of a bubble in a champagne glass, bubbles rise)
      // You go back up the tree, from the listener to the very top parent element

// If you log to the console, there are properties such as:
// bubbleCount, captureCount, path (stack of DOM elements)

// see image for good diagram

// Order of the hierarchy:
// Only looking at the bubble phase. We aren't attaching listeners for the capture phase
// Events can only be subscribe to one phase, by default it's the bubble phase
// You can tell the DOM to subscribe to the capture phase if you want


// Example 1:
// Bubble Phase
// Firstly, remember by default, events are propogated at the bubble phase.
// The order is super important; 
// we have written the listeners (in code) as <div>, <p>, then <button>. 
// Usually JS executes top to bottom (sequentially).
// However, we know the order of bubble phase starts bottom to top (as per diagram)
// Look at the console output. 
// The console logs in bubble phase order, meaning we propogate events at the bubble phase.

// html
<div id="div">
    <p id="p">
        Lorem ipsum dolor sit amet...
        <button id="clickme">Click me</button>
    </p>
</div>


// js
const div = document.getElementById('div');
const p = document.getElementById('p');
const button = document.getElementById('clickme');

div.addEventListener('click', (e) => {
    console.log('div bubble event');
});

p.addEventListener('click', (e) => {
    console.log('p bubble event');
});

button.addEventListener('click', (e) => {
    console.log('button bubble event');
});

// Console Output: 
// > button bubble event
// > p bubble event
// > div bubble event



// Example 2: 
// Capture Phase
// We can override the default bubble phase to propogate events at the capture phase like this.
// We see the console output is inverted to a capture phase.

// html
<div id="div">
    <p id="p">
        Lorem ipsum dolor sit amet...
        <button id="clickme">Click me</button>
    </p>
</div>

// js
const div = document.getElementById('div');
const p = document.getElementById('p');
const button = document.getElementById('clickme');

div.addEventListener('click', (e) => {
    console.log('div capture event');
}, true);

p.addEventListener('click', (e) => {
    console.log('p capture event');
}, true);

button.addEventListener('click', (e) => {
    console.log('button capture event');
}, true);

// Console Output: 
// > div bubble event
// > p bubble event
// > button bubble event
