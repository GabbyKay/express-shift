// ContactPage.jsx

import React, { useState } from "react";
import axios from "axios";
import styles from "./ContactPage.module.css";
import Head from "../../header/head/Head";
import Footer from "../../main/section/footer_sec/Footer";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", { name, email, message });
      setIsSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head />
      <div className={styles.contact_container}>
        <h1>Contact Us</h1>
        {isSent ? (
          <div>Thank you for your message!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className={styles.contact_label}>
              Name:
              <input
                className={styles.contact_input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className={styles.contact_label}>
              Email:
              <input
                className={styles.contact_input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className={styles.contact_label}>
              Message:
              <textarea
                className={styles.contact_textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
            <button className={styles.contact_btn} type="submit">
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>{" "}
    </div>
  );
}

export default ContactPage;
