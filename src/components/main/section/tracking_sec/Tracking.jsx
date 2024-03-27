import React, { useState } from "react";
import axios from "axios";
import styles from "./tracking.module.css";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shippingCarrier, setShippingCarrier] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleShippingCarrierChange = (event) => {
    setShippingCarrier(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.tracking.com/${shippingCarrier}/${trackingNumber}`
      );
      setTrackingResult(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
      setTrackingResult(null);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.tracking}>
      <h1>Track Your Order</h1>
      <div className={styles.formbg}>
        <div className={styles.user_icon}>
          <i class="fa fa-user"></i>
        </div>

        <div className={styles.form1}>
          <form onSubmit={handleFormSubmit}>
            <label>
              <input
                type="text"
                placeholder="Your Tracking ID Now:"
                value={trackingNumber}
                onChange={handleTrackingNumberChange}
              />
            </label>
          </form>
        </div>

        <br />
        <div className={styles.form2}>
          <form onSubmit={handleFormSubmit}>
            <label>
              <input
                type="text"
                placeholder="Shipping carrier:"
                value={shippingCarrier}
                onChange={handleShippingCarrierChange}
              />
            </label>
          </form>
        </div>

        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Track"}
        </button>

        {trackingResult && (
          <div>
            <h2>Tracking information:</h2>
            <p>{trackingResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
