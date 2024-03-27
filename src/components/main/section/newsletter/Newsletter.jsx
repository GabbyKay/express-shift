import { useState } from "react";
import styles from "./newsletter.module.css";

function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    setErrors(validations.map((validation) => validation(value)));
  };

  const isValid = !errors.some(Boolean);

  return {
    value,
    isValid,
    errors,
    bind: {
      value,
      onChange: handleChange,
    },
  };
}

function Newsletter() {
  const name = useInput("", [
    (value) => (value.length < 3 ? "Name must be at least 3 characters" : null),
    (value) =>
      !value.match(/^[a-zA-Z ]+$/)
        ? "Name must only contain letters and spaces"
        : null,
  ]);
  const email = useInput("", [
    (value) =>
      !value.match(/^\S+@\S+\.\S+$/)
        ? "Email must be a valid email address"
        : null,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.isValid && email.isValid) {
      // submit form data
    }
  };

  return (
    <div className={styles.Newsletter_2}>
        <h2>News Letter</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
      {/* <label htmlFor="name" className={styles.label}>
        Name:
      </label> */}
      <input
      placeholder="Name:"
       id="name" type="text" {...name.bind} className={styles.input} />
      {name.errors.map((error) => (
        <div key={error} className={styles.error}>
          {error}
        </div>
      ))}

      {/* <label htmlFor="email" className={styles.label}>
        Email:
      </label> */}
      <input 
      placeholder="Email:"
      id="email" type="email" {...email.bind} className={styles.input} />
      {email.errors.map((error) => (
        <div key={error} className={styles.error}>
          {error}
        </div>
      ))}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
    </div>
    
  );
}

export default Newsletter;
