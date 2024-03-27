import React from 'react'
import Head from '../../../../header/head/Head'
import styles from "../style.module.css";
import Footer from "../../footer_sec/Footer";

const Warehousing = () => {
  return (
    <div>
    <Head/>
    <div className={styles.head_img}>
    <img
    style={{height:'70vh'}}
      src="./images/warehousing.jpg"
      alt=""
    />
  </div>
  <br />
  <br />
  <div className={styles.txt}>
    <h4 style={{ color: "rgb(241,90,37)" }}>
      <b>Home / Services</b>
    </h4>
    <h4 style={{ fontWeight: "500" }}>Warehousing</h4>
  </div>
  <br />

  <div className={styles.txt2}>
    <h1>Providing you secure and cost-effective shipment solutions
.</h1>
    <p>
    Complete warehousing, crating, and storage for shipments at any point along the transport route within our global network. Call us now at{" "}
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

export default Warehousing