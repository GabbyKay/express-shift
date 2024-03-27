import React from "react";
import ContactForm from "../contact/ContactForm";
import styles from "./why_us.module.css";

const Why_us = () => {
  return (
    <div className={styles.Why_us_container}>
      <div className={styles.left_side}>
        <h5>WHY CHOOSE US</h5>
        <h1>We create opportunity to reach potential</h1>
        <div className={styles.icon_text}>
          <div className={styles.inner_box}>
            <img src="./images/icons8-worldwide-delivery-80.png" alt="" />
          </div>
          <p>
          We are committed to delivering your logistics needs, providing you with proactive, cost-effective, and world-class solutions.
          </p>
        </div>
        <br />
        <br />
        <div className={styles.icon_text}>
          <div className={styles.inner_box}>
            <img
              className={styles.img2}
              src="./images/icons8-cardboard-box-64.png"
              alt=""
            />
          </div>
          <p>
          With us, you can guarantee a hassle-free service, and you can rest easy knowing your shipment will arrive at its destination on time.
          </p>
        </div>
      </div>

      <div className={styles.right_side}>
        <ContactForm/>

      </div>
    </div>
  );
};

export default Why_us;
