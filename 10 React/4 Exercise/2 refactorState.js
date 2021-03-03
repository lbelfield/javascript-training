import { useState } from "react";

// import { isValidEmail } from "./utils";
// note for simplicity, in the same app.js, should put in a utils
const isValidEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export default function App() {
  const [text, setText] = useState("");
  
  // TODO change these three useStates into one useState
  // Don't need to refactor above useState() because textbox is a different event to button click
  // State changes on common event, if; isValidEmail() (line 27)
  const [formValidationMessage, setFormValidationMessage] = useState("");
  const [formStyle, setFormStyle] = useState({});
  const [showEmailButton, setShowEmailButton] = useState(false);

  // validate email via regex
  const onSubmit = (e) => {
    // form stop default behavior
    e.preventDefault();
    // form dont propagate outside of the form
    e.stopPropagation();

    if (!isValidEmail(text)) {
      setFormValidationMessage("Not valid email");
      setFormStyle({ color: "tomato" });
      setShowEmailButton(true);
    } else {
      setFormValidationMessage("Success! Email subscribed");
      setFormStyle({ color: "green" });
      setShowEmailButton(false);
    }
  };

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

        {showEmailButton && <button>Create an email account</button>}
      </form>
      <p style={formStyle}>{formValidationMessage}</p>
    </>
  );
}
