import React from "react";
import styles from "./how_to.module.css";

const How_to = () => {
  return (
    <div className={styles.how_to_container}>
      <div className={styles.head_text}>
        <div className={styles.h4}>
          <h4>HOW IT WORK</h4>
        </div>
        <div className={styles.h1}>
          <h1>3 easy step to task</h1>
        </div>
      </div>
      <div className={styles.big_container}>
        <div className={styles.inner_container}>
          <div className={styles.iner_img}>
            <img src="./images/01.png" alt="" width={80} />
          </div>
          <div className={styles.circle}>
            <div className={styles.circle_inner}>
              <h1>01</h1>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.h3}>
            <h3>Enter your & product details</h3>
          </div>
        </div>

        <div className={styles.inner_container}>
          <div className={styles.iner_img}>
            <img src="./images/02.png" alt="" width={80} />
          </div>
          <div className={styles.circle}>
            <div className={styles.circle_inner}>
              <h1>02</h1>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.h3}>
            <h3>Pay your service charges</h3>
          </div>
        </div>

        <div className={styles.inner_container}>
          <div className={styles.iner_img}>
            <img src="./images/03.png" alt="" width={80} />
          </div>
          <div className={styles.circle}>
            <div className={styles.circle_inner}>
              <h1>03</h1>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.h3}>
            <h3>Ready to send your goods</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How_to;
