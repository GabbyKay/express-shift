import React from "react";
import styles from "./head.module.css";
import DropdownNavbar from "../navbar/DropdownNavbar";
import { Link } from "react-router-dom";
// import social_links from "./social_links";

const Head = () => {
  return (
    <div>
      <section className={styles.head}>
        <div className={styles.hlogo}>
          <img
            className={styles.hlogoimg}
            src="images/logo.png"
            alt=""
            width={300}
          />
        </div>
        <div className={styles.h_container}>
          <div className={styles.left_row}>
            <div className={styles.h_contents}>
              <i className="fa fa-location"></i>
              <label> 380 St Kilda Road, Australia </label>
              <i className="fa fa-phone"></i>
              <label> +2348146079030 </label>
              <i className="fa fa-envelope"></i>
              <label>expresshift@gmail.com</label>
              <div className={styles.h_contents2} >
                <Link style={{color:'white', textDecorationLine:'none'}} to = './FAQpage'>
                <label> FAQ </label>
                </Link>
                <label>Need Help? </label>
                <span>🏳️‍⚧️</span>
                
                <label>EN</label>
                <span>🏳️‍⚧️</span>
                <label>USD</label>
              </div>
              <div className={styles.social_links}>
                <ul  className={styles.social_icons}>
                  <li>
                    <a class="icon-fallback-text twitt hexagon"
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
          <DropdownNavbar/>
        </div>
      </section>
    </div>
  );
};

export default Head;
