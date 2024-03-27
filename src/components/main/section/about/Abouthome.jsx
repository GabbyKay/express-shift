import React from "react";
import { Link } from "react-router-dom";
import Autocounter from "../../AutoCounter/Autocounter";
import Blog_sec from "../blog_sec/Blog_sec";
import Footer from "../footer_sec/Footer";
import How_to from "../how_to/How_to";
import Latecstproject from "../latestproject/Latecstproject";
import Services from "../services_sec/Services";
import Testimonials from "../testimonials/Testimonials";
import VideoBackground from "../videbg/VideoBackground";
import Why_us from "../why_choose_us/Why_us";
import styles from "./aboutsection.module.css";
const Abouthome = () => {
  return (
    <div className={styles.Aboutsection}>
      <div className={styles.cards_section}>
        <div className={styles.cardA}>
          <div className={styles.card2}>
            <img src="https://img.icons8.com/external-others-phat-plus/64/null/external-calender-cyber-monday-outline-others-phat-plus.png" />
            <br />
            <br />
            <br />
            <img src="https://img.icons8.com/ios/50/null/1-circle.png" />
          </div>
          <h2> Cost optimization</h2>

          <p>We can receive your packages in bits and consolidate to fewer packages to save you a lot of money on shipping costs.</p>
        </div>
        <div className={styles.cardA}>
          <div className={styles.card2}>
            <img src="https://img.icons8.com/ios/50/null/alarm-clock--v1.png" />
            <br />
            <br />
            <br />
            <img src="https://img.icons8.com/ios/50/null/2-circle.png" />
          </div>
          <h2> Reduced transit </h2>
          <p>we aim to enhance transportation efficiency and sustainability. By leveraging advanced technologies and real-time data. </p>
        </div>
        <div className={styles.cardA}>
          <div className={styles.card2}>
            <img src="https://img.icons8.com/external-phatplus-lineal-phatplus/64/null/external-stock-global-shipping-phatplus-lineal-phatplus.png" />
            <br />
            <br />
            <br />
            <img src="https://img.icons8.com/ios/50/null/3-circle.png" />
          </div>
          <h2> Warehouse operation</h2>
          <p>They utilize warehouse management systems (WMS) for real-time visibility, automate tasks, and improve accuracy.</p>
        </div>
      </div>
      <div className={styles.sec2_container}>
        <div className={styles.sec2}>
          <div className={styles.sec2img}>
            <img
              src="https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <div className={styles.sec2img}>
            <img
              src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <div className={styles.rightside}>
            {/* 1st sec  */}
            <div className={styles.first_sec_rightside}>
              <h4>TRANSPORTATION COMPANY </h4>
              <h1>We provide full range of transportation services</h1>
              <p>
              We are committed to delivering your logistics needs, providing you with proactive, cost-effective, and world-class solutions. With us, you can guarantee a hassle-free service, and you can rest easy knowing your shipment will arrive at its destination on time.
              </p>
            </div>
            <div className={styles.icons}>
              <img src="https://img.icons8.com/ios/50/null/geography--v1.png" />

              <img src="https://img.icons8.com/ios/50/null/services--v1.png" />
            </div>

            <div className={styles.text}>
              <h4>Worldwide services</h4>
              <p>
                We’re always provide people a complete solution focused of any
                business.
              </p>
            </div>

            <br />
            <br />
            <br />

            <div className={styles.text}>
              <h4>Local services</h4>
              <p>
                We’re always provide people a complete solution focused of any
                business.
              </p>
              <Link to="/Aboutpage">
                {" "}
                <button className={styles.btn}>Explore More</button>
              </Link>
            </div>
          </div>
        </div>
        <Services />
        <VideoBackground />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <How_to />
        <Autocounter />
        <Latecstproject />
        <Why_us />
        <Testimonials />
        <Blog_sec />
        <Footer />
      </div>
    </div>
  );
};

export default Abouthome;
