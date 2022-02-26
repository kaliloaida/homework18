import { validEmailRegex, validNameRegex} from "./Rejex";
import useInput from "./useInput";
const BasicForm = () => {
const firstName = useInput(validNameRegex)
const lastName=useInput(validNameRegex)
const email=useInput(validEmailRegex)

let formIsValid =false
 formIsValid = firstName.inputValidRegex && lastName.inputValidRegex && email.inputValidRegex;
 const error ={
  firstNameError:'',
  lastNameError:'',
  emailError:'',
}
 if(firstName.nameInputIsValid){
   error.firstName = 'Enter your Firstname'
 }else if(firstName.validateRejex){
   error.firstName ='Firstname must not contain numbers'
 }
 if(lastName.nameInputIsValid){
  error.lastName = 'Enter your Lastname'
}else if(lastName.validateRejex){
  error.lastName ='LastName must not contain numbers'
}
if(email.nameInputIsValid){
  error.email = 'Enter your E-mail'
}else if(email.validateRejex){
  error.email ='Email must not be empty'
}

let firstNameInputClasses = firstName.nameInputIsValid || firstName.validateRejex ? 'form-control invalid' : 'form-control'
	let lastNameInputClasses = lastName.nameInputIsValid || lastName.validateRejex ? 'form-control invalid' : 'form-control'
	let emailInputClasses = email.nameInputIsValid	||email.validateRejex ? 'form-control invalid' : 'form-control'

  const formSubmitHandler=(event)=>{
event.preventDefault()
firstName.onClear()
lastName.onClear()
email.onClear()
}

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          {console.log(firstName)}
          <label htmlFor="Firstname">First Name</label>
          <input
          value={firstName.values}
            type="text"
            id="Firstname"
            onBlur={firstName.onBlur}
            onChange={firstName.onChange}
          />
          {error.firstName && <p>{error.firstName}</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="Lastname">Last Name</label>
          <input
          value={lastName.values}
            type="text"
            id="Lastname"
            onBlur={lastName.onBlur}
            onChange={lastName.onChange}
          />
          {error.lastName &&<p>{error.lastName}</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
        value={email.values}
          type="text"
          id="email"
          onBlur={email.onBlur}
          onChange={email.onChange}
        />
       {error.email &&  <p>{error.email}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
