// ContactForm.js

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [freightType, setFreightType] = useState('');
  const [load, setLoad] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const handleFreightTypeChange = event => {
    setFreightType(event.target.value);
  };

  const handleLoadChange = event => {
    setLoad(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFreight Type: ${freightType}\nLoad: ${load}`);
    // Here you can send the form data to your server or external service
    // using fetch or axios, for example.
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className={styles.first_row}>
<div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </div>
      </div>
      
      <div className={styles.field}>
        <label htmlFor="freightType">Freight Type:</label>
        <select
          id="freightType"
          name="freightType"
          value={freightType}
          onChange={handleFreightTypeChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Air">Air</option>
          <option value="Sea">Sea</option>
          <option value="Land">Land</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="Load">Load:</label>
        <select
          id="load"
          name="load"
          value={load}
          onChange={handleLoadChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Door to Door">Door to Door</option>
          <option value="International Shipping">International Shipping</option>
          <option value="Multi Modal">Multi Modal</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
