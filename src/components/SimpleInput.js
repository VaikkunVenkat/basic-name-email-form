import { useState } from "react";
import Input from "./Input";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (enteredNameIsValid === false || enteredEmailIsValid === false) return;
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        type="text"
        value={enteredName}
        id="name"
        label="Your name"
        onChange={(event) => setEnteredName(event.target.value)}
        onBlur={() => setEnteredNameTouched(true)}
        isInValid={nameInputIsInvalid}
        inValidMessage="Name must not be empty"
      />
      <Input
        type="text"
        value={enteredEmail}
        id="email"
        label="Your email"
        onChange={(event) => setEnteredEmail(event.target.value)}
        onBlur={() => setEnteredEmailTouched(true)}
        isInValid={emailInputIsInvalid}
        inValidMessage="Email is not valid"
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
