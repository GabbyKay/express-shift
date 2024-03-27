import React, { useState } from 'react';
import styles from './RequestQuote.module.css';
import Footer from '../../main/section/footer_sec/Footer';
import Head from '../../header/head/Head';

const RequestQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [transportation, setTransportation] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleBusinessChange = (event) => {
    setBusiness(event.target.value);
  };

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (phone.trim() === '') {
      errors.phone = 'Phone is required';
    }

    if (transportation === '') {
      errors.transportation = 'Mode of Transportation is required';
    }

    if (message.trim() === '') {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
   <div>
    <Head/>
    <br />
     <div className={styles.container}>
      <h1>Request a Quote</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="business">Business or Organization:</label>
          <input
            type="text"
            id="business"
            value={business}
            onChange={handleBusinessChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="transportation">Mode of Transportation:</label>
          <select
            id="transportation"
            value={transportation}
            onChange={ handleTransportationChange}
            required
          >
            <option value="">Select mode of transportation</option>
            <option value="Car">Car</option>
            <option value="Train">Train</option>
            <option value="Bus">Bus</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Other">Other</option>
          </select>
          {errors.transportation && (
            <span className={styles.error}>{errors.transportation}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <button  className={styles.requestbtn} type="submit">Submit</button>
      </form>
    </div>
    <br />
    <Footer/>
   </div>
  );
};

export default RequestQuote;

