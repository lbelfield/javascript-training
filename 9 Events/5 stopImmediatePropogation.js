// jsbin.com

e.stopImmediatePropogation();

// Any event on the same element AND any subsequent elements will not be propogated
e.stopImmediatePropogation();

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
    // key line here:
    e.stopImmediatePropagation();
    console.log('button bubble event #1');
});

button.addEventListener('click', (e) => {
    console.log('button bubble event #2');
});

// Console Output
// > button bubble event #1

// Note: No button bubble event #2 because we used stopImmediatePropagation()