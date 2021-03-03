// Vanilla JS:

// HTML:

// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>JS Bin</title>
// </head>
// <body>
//   <input id="t" type="text" value="hey" />
//   <input id="c" type="checkbox" />
// </body>
// </html>

//js

const t = document.getElementById("t");
const c = document.getElementById("c");

const noLs = (s) => !s.includes('l');
let stateText = t.value;
let stateCheck = c.checked;

t.addEventListener('input', (e) => {
  const v = e.target.value;
  if (!stateCheck || noLs(v)) {
    stateText = v;
  }

  t.value = stateText;
});

c.addEventListener('input', (e) => {
  stateCheck = e.target.checked;
  if (stateCheck) {
    t.setAttribute('maxlength', '20');
  } else {
    t.removeAttribute('maxlength');
  }

  console.log('check enabled', stateCheck);
});





// REACT:

import { useState } from "react";
import "./styles.css";

const noLs = (s) => !s.includes('l');

export default function App() {
  const [text, setText] = useState('hey');
  const [checkbox, setCheckbox] = useState(false);

  const onTextChange = (e) => {
    if (!checkbox || noLs(e.target.value)) {
      setText(e.target.value);
    }
  };

  const onCheckboxChange = (e) => setCheckbox(e.target.checked);

  return (
    <>
      <input
        type="text"
        value={text}
        maxLength={checkbox ? 20 : undefined}
        onChange={onTextChange}
      />
      <input
        type="checkbox"
        value={checkbox}
        onChange={onCheckboxChange}
      />
    </>
  );
}
