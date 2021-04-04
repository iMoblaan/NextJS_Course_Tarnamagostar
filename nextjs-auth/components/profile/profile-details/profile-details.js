import { useRef } from 'react';
import classes from './profile-details.module.css';

function ProfileDetails(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredCountry = countryRef.current.value;
    const enteredCity = cityRef.current.value;

    props.onAproveDetails({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      country: enteredCountry,
      city: enteredCity,
    });
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' ref={firstNameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' ref={lastNameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='country'>Country</label>
          <input type='text' id='country' ref={countryRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityRef} />
        </div>
        <div className={classes.action}>
          <button>Aprove Details</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileDetails;
