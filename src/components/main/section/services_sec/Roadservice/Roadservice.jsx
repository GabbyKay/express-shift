import React from 'react'
import Head from '../../../../header/head/Head'
import styles from "../style.module.css";
import Footer from "../../footer_sec/Footer";

const Roadservice = () => {
  return (
    <div>
        <Head/>
        <div className={styles.head_img}>
        <img
        style={{height:'70vh'}}
          src="./images/roadservices.jpg"
          alt=""
        />
      </div>
      <br />
      <br />
      <div className={styles.txt}>
        <h4 style={{ color: "rgb(241,90,37)" }}>
          <b>Home / Services</b>
        </h4>
        <h4 style={{ fontWeight: "500" }}>Road service</h4>
      </div>
      <br />

      <div className={styles.txt2}>
        <h1>Always making moving hassle-free.</h1>
        <p>
        Expresshift Shipping specializes in inter-modal transportation by providing inland and local transportation for both domestic and international shipments. We perform Less Than Truck Load (LTC)/Truckload ground. Call us now at{" "}
          <b style={{ color: "black" }}>+2348146079030</b> to speak to a
          consolidation specialist or email us at{" "}
          <b style={{ color: "rgb(241,90,37)" }}>info@Expresshift.com.</b>{" "}
        </p>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Roadservice