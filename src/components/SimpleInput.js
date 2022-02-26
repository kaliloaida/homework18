import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) return;
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = !nameInputIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form  onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        {console.log(enteredName)}
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
