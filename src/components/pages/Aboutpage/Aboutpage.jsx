import React from "react";
import styles from "./aboutpage.module.css";
import Head from "../../header/head/Head";
// import Abouthome from "../../main/section/about/Abouthome";
import { Link } from "react-router-dom";
import Readmore from "./Readmore";
import Footer from "../../main/section/footer_sec/Footer";

const Aboutpage = () => {
  return (
    <div>
      <div className={styles.Head}>
        <Head />
      </div>
      <div className={styles.about_header}>
        <img src="./images/latestp4.jpg" alt="" />
        <div className={styles.about_text}>
          <h1>About Us</h1>
          <div className={styles.subheader}>
            <Link to = '/'>
            <h5 style={{color:' rgb(241,90,37)', textDecoration:'none'}}>Home</h5>
            </Link>
            /
            <h5> About</h5>
          </div>
        </div>
      </div>
      <div className={styles.atext}>
        {/* <Abouthome/> */}

        {/* <div className={styles.head_img}>
          <img
            src="https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div> */}

        <br />
     
        {/* <div className={styles.txt}>
          <h4 style={{ color: "rgb(241,90,37)" }}>
            <b>Home /</b>
          </h4>
          <h4 style={{ fontWeight: "500" }}>About US</h4>
        </div> */}

        <div className={styles.txt2}>
          <h1>Your trusted logistic partner.</h1>
          <p>
            Established in 2020, Expresshift Shipping Services has been offering
            a broad range of freight and logistic services to support your
            shipping needs. We handle any consignment, including but not limited
            to air freight, warehousing services, procurement, door-to-door
            deliveries, cargo insurance, crating/packaging, package
            consolidation, documentation, export packing, and other logistics
            services from the USA to international destinations, especially to
            Africa and the Middle East. We also do air shipping to Lagos,
            Nigeria. We understand how valuable every parcel is to you and your
            customer, and we also know you are only expecting the best. For that
            reason, we strive hard to bring fast, safe, cost-effective, and
            prompt delivery services for you. Moreover, we take pride in our
            culture of integrity, innovation, and commitment, and we always
            encourage our employees to deliver impeccable services to our
            customers. Armed with all the infrastructure facilities, up-to-date
            innovations, and a strong network, we are prepared to meet your
            needs, deadlines, and service requirements. You can guarantee that
            we are always ready to face any challenges relating to cargo
            shipments, freight services, and the transportation industry. You
            can trust us to get the job done so you can focus on your
            commitments.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className={styles.mission}>
          <br />
          <h1>Mission</h1>
          <p>
            Our mission is to deliver the most efficient international shipping
            service that our clients can count on. We commit to providing the
            highest levels of logistics services with sustainability and
            innovation to build lasting commitment, strengthen businesses, and
            lift communities.
          </p>
        </div>
<br />

        <Footer />
      </div>
      <Readmore />
    </div>
  );
};

export default Aboutpage;
