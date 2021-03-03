import { useState } from "react";

// import { isValidEmail } from "./utils";
// note for simplicity, in the same app.js, should put in a utils
const isValidEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [validEmail, setValidEmail] = useState(null);

  // validate email via regex
  const onSubmit = (e) => {
    // form stop default behavior
    e.preventDefault();
    // form don't propagate outside of the form
    e.stopPropagation();

    if (!isValidEmail(text)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  // Big refactor:
  // Initially used three useState() hooks
  // Then used one useState() hook with three properties for the variable.
  // Note this is much cleaner.
  // because Persistent Ignorant (PI/POCO) variables,
  // rather than state variables
  // React doesn't actually care about the state of these, the event can be put into one; validEmail
  // Which can then 
  const validEmailStyle = validEmail ? { color: "green" } : { color: "tomato" };
  const validEmailMessage = validEmail
    ? "Success! Email subscribed"
    : `${text} is not valid email`;

  // Note: React IS NOT like MVC world, this would be your view.
  // Usually, as little logic in your View (to keep dumb) as possible so that: 
      // 1) you decouple code 
      // 2) easy testing
  // However, this View is still dumb and the logic is actually presentation logic
  // Also, React world is easier to test than C#/Razor for presentation logic
  return (
    <>
      <form onSubmit={onSubmit}>
        {/* form's onSubmit looks for submit input  */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="subscribe" />

        {validEmail === false && <button>Create an email account</button>}
      </form>
      {validEmail !== null && (
        <p style={validEmailStyle}>{validEmailMessage}</p>
      )}
    </>
  );
}
