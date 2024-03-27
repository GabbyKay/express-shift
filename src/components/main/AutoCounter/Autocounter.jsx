import React, { useState, useEffect } from "react";
import styles from "./autocounter.module.css";

const Autocounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      if (count1 < 9000) {
        setCount1((prevCount) => prevCount + 1);
      }
    }, 0.9);

    const intervalId2 = setInterval(() => {
      if (count2 < 5000) {
        setCount2((prevCount) => prevCount + 1);
      }
    }, 0.9);

    const intervalId3 = setInterval(() => {
      if (count3 < 10000) {
        setCount3((prevCount) => prevCount + 1);
      }
    }, 0.9);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [count1, count2, count3]);

  return (
    <div className={styles.autoCounterSection}>
      <div className={styles.counterbg}>
        <img src="./images/counterbg.jpg" alt="" width={200} />
        <div className={styles.counterh2}>
            <h4>WE DELIVER ON TIME</h4>
          <h2>Total Coverage & Flexibility in Exports & Imports</h2>
          <p>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <h3>Projects Completed</h3>
            <span>{count1}</span>
          </div>
          <div className={styles.counter}>
            <h3>Satisfied Customers</h3>
            <span>{count2}</span>
          </div>
          <div className={styles.counter}>
            <h3>Delivered on Time</h3>
            <span>{count3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autocounter;
