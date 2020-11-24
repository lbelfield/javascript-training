// Note: used https://codesandbox.io/

// -------------------------------------
// Example 1: FAIL
// When it comes to vanilla JS you need to keep track of the DOM
// This makes it difficult to code. Here, our re-render works the first time, but because 
// we overwrite a new "app" with the same name, we point "app" to a new memory location.
// At a glance, this is what we need, however, we lose all our events attached to our first "app".
// Therefore, the re-render works on the first keystroke, but not the second :sob:

import "./styles.css";

let characters = 0;

// innerHtml sets children :D
document.getElementById("app").innerHTML = `
<div>
  <input id="input" type="text" />
  <p id="label">There are ${characters} characters in the textbox</p>
</div>
`;

const input = document.getElementById("input");

input.addEventListener("input", (e) => { // note, we also used keypress and keyup here...
  characters = e.target.value.length;
  console.log(e.target.value, characters);
  rerender();
});

const rerender = () => {
  document.getElementById("app").innerHTML = `
<div>
  <input id="input" type="text" />
  <p id="label">There are ${characters} characters in the textbox</p>
</div>
`;
};

// note, keypress and keyup on line 23 also work, however, these were restricted to 
// keyboard input and wouldn't work if used the mouse, eg c/p


/// ----------------------------------------------
// Example 2:
// What we need to do is rather than re-write the whole app, we can overwrite just the <p>
// by using the DOM to the <p> then using `innerHTML` to overwrite <p>'s children 
// (the children being the text) 

// In this case, we're OK. But if we needed something more complex than a <p> it would be verbose.
// When it comes to vanilla JS you need to keep track of the DOM
// This makes it difficult to code. This is why we use React etc

import "./styles.css";

let characters = 0;

// innerHtml sets children :D
document.getElementById("app").innerHTML = `
<div>
  <input id="input" type="text" />
  <p id="label">There are ${characters} characters in the textbox</p>
</div>
`;

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  characters = e.target.value.length;
  console.log(e.target.value, characters);
  rerenderLabel();
});

const rerenderLabel = () => {
  const label = document.getElementById("label");
  label.innerHTML = `There are <strong>${characters}</strong> characters in the textbox`;
};