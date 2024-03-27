import React from "react";
import Newsletter from "../newsletter/Newsletter";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.full_container}>
      <div className={styles.small_container}>
        <div className={styles.small_box}>
          <div className={styles.inner_img}>
            {" "}
            <img src="./images/map-marker-50.png" alt="" width={50} />
          </div>
          <div className={styles.text}>
            <h5>Address</h5>
            <p>30 St Kilda Road, Jackson Store, Nigeria</p>
          </div>
        </div>

        <div className={styles.small_box}>
          <div className={styles.inner_img}>
            {" "}
            <img src="./images/hand-with-smartphone-50.png" alt="" width={50} />
          </div>
          <div className={styles.text}>
            <h5>Contact</h5>
            <p>tel: +234814607930
              phone:07018894193
            </p>
          </div>
        </div>

        <div className={styles.small_box}>
          <div className={styles.inner_img}>
            {" "}
            <img src="./images/time-machine-80.png" alt="" width={50} />
          </div>
          <div className={styles.text}>
            <h5>Timing</h5>
            <p>We offer fast and accurate delivery</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <img src="./images/logo.png" alt="" width={150} />
            <h2>Expresshift</h2>
          </div>

          <p>
          Expresshift Shipping Services offers a broad range of freight and logistic services to support your shipping needs.
          </p>
          <br />
          <Link to = '/Aboutpage'>
          <button className={styles.btn2}>About</button>
          </Link>
        </div>

        <div className={styles.services}>
          <div className={styles.services_header}>
            <h2>Services</h2>
          </div>
          <div className={styles.services_p}>
            <ul>
              <li>Reliability & Punctuality </li>
              <li>Trusted Franchise </li>
              <li>Warehoues Storage </li>
              <li>Real Time Tracking</li>
              <li>Transparent Pricing</li>
            </ul>
          </div>
        </div>

        <div className={styles.projects}>
          <h2>Projects</h2>

          <div className={styles.img_container}>
            <div className={styles.p_imgs}>
              <img
                src="https://images.pexels.com/photos/3856433/pexels-photo-3856433.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
              />
            </div>
            <div className={styles.p_imgs}>
              <img
                src="https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
              />
            </div>
            <div className={styles.p_imgs}>
              <img
                src="https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
              />
            </div>
          </div>
          <br />
          <div className={styles.img_container}>
            <div className={styles.p_imgs}>
              <img
                src="https://images.pexels.com/photos/2147993/pexels-photo-2147993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
              />
            </div>
            <div className={styles.p_imgs}>
              <img
                src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
              />
            </div>
            <div className={styles.p_imgs}>
              <img
                src="https://images.pexels.com/photos/11589778/pexels-photo-11589778.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
              />
            </div>
          </div>
        </div>

        <Newsletter />
      </div>

      <div className={styles.footer_time}>
        <h4 style={{color:'grey'}}>© Copyright 2022 by Company.com</h4>
        <div className={styles.social_links}>
          <ul className={styles.social_icons}>
            <li>
              <a
                class="icon-fallback-text twitt hexagon"
                target="blank"
                href="#"
                title="Twitter"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                class="icon-fallback-text fb hexagon"
                target="blank"
                href="#"
                title="Facebook"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                class="icon-fallback-text pin hexagon"
                target="blank"
                href="#"
                title="Pinterest"
              >
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </li>

            <li>
              <a
                class="icon-fallback-text ins"
                target="blank"
                href="#"
                title="Instagram"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
