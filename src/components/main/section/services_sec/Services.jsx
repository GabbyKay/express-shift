import React from "react";
import Tracking from "../tracking_sec/Tracking";
import styles from "./services.module.css";
import { Link } from "react-router-dom";

const Services = () => {
  const buttonStyle = {
    fontSize:'10px', 
    border:'none', 
    backgroundColor:'transparent',
    color:'rgb(241,90,37)',
  }
  return (
    <div className={styles.services}>
      <div className={styles.heading}>
        <h4>SPECIALISE IN THE TRANSPORTATION</h4>
        <h1>Specialist logistics services</h1>
      </div>

      {/* service section 2  */}
      <div className={styles.container}>
        <div className={styles.img_box}>
          <div className={styles.inner_img}>
            <Link to="/Airfreight">
              <img
                src="https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.inner_text}>
            <p1> 01 services</p1>
            <h2>Air freight</h2>
            <br />
            <p>
              {" "}
              we offer fast and efficient method of transporting goods globally.
              we offers speedy delivery, connects businesses worldwide, and
              provides reliable services. <Link to="/Airfreight"> <button style={buttonStyle}>Read more</button></Link>{" "}
            </p>
          </div>
        </div>

        <div className={styles.img_box}>
          <div className={styles.inner_img}>
            <Link to="/Seafreight">
              <img
                src="https://images.pexels.com/photos/2051027/pexels-photo-2051027.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.inner_text}>
            <p1> 02 services</p1>
            <h2>Sea freight</h2>
            <br />
            <p>
              {" "}
              we offer a reliable and cost-effective method of shipping goods
              globally. It offers affordability, especially for large volumes
              and long distances. <Link to="/Seafreight"> <button style={buttonStyle}>Read more</button></Link>
            </p>
          </div>
        </div>

        <div className={styles.img_box}>
          <div className={styles.inner_img}>
            <Link to="/Roadservice">
              <img
                src="https://images.pexels.com/photos/6699421/pexels-photo-6699421.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.inner_text}>
            <p1> 03 services</p1>
            <h2>Road service</h2>
            <br />
            <p>
              we offer cost-effective and flexibility in terms of pickup and
              delivery times, making them a popular choice for businesses and
              individuals.{" "}
              <Link to="/Roadservice"> <button style={buttonStyle}>Read more</button></Link>
            </p>
          </div>
        </div>

        <div className={styles.img_box}>
          <div className={styles.inner_img}>
            <Link to="/Warehousing">
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.inner_text}>
            <p1> 04 services</p1>
            <h2>Warehousing </h2>
            <br />
            <p>Complete warehousing, crating, and storage for shipments at any point along the transport route within our global network.  <Link to="/Warehousing"> <button style={buttonStyle}>Read more</button></Link></p>
          </div>
        </div>
      </div>
      <div className={styles.outer_box}>
        <div className={styles.outer_box2}>
          <Tracking />
        </div>
      </div>
      {/* service section 2  end*/}
    </div>
  );
};

export default Services;
