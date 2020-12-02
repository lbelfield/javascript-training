// jsbin.com

e.stopPropogation();

// Sometimes, you may need to isolate your listener. To do this, you can use:
e.stopPropogation();
// To stop bubbling up after the listener has been found
// This will stop the next element's listeners from being triggered after this one has been triggered.

// Example 1:

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
    e.stopPropagation();
    console.log('button bubble event');
});

// Console Output:
// > button bubble event


// Example 2: 
// It will still propogate any other events related to that element, 
// but just not anything further in the capture/bubble phase 

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
    // key line here:
    e.stopPropagation();
    console.log('button bubble event #1');
});

button.addEventListener('click', (e) => {
    console.log('button bubble event #2');
});

// Console Output:
// > button bubble event #1
// > button bubble event #2 
// Note: still propogates event #2 despite stopPropogate being in event #1



// Example 3: 
// this can be very restrictive, because
// if you put this in the capture phase, it won't trigger the bubble phase at all
// (obviously because capture always triggers first; see diagram in 3)

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
    // key line here:
    e.stopPropagation();
    console.log('div capture event');
}, true);

p.addEventListener('click', (e) => {
    console.log('p bubble event');
});

button.addEventListener('click', (e) => {
    console.log('button bubble event #1');
});

button.addEventListener('click', (e) => {
    console.log('button bubble event #2');
});

// Console Output 
// > div capture event
// Never even gets to bubble event because capture phase is always first