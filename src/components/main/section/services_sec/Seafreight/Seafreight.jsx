import React from "react";
import Head from "../../../../header/head/Head";
import styles from "../style.module.css";
import Footer from "../../footer_sec/Footer";

const Seafreight = () => {
  return (
    <div>
      <Head />
      <div className={styles.head_img}>
        <img
        style={{height:'64vh'}}
          src="https://images.unsplash.com/photo-1530890448995-4d82724f702c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div className={styles.txt}>
        <h4 style={{ color: "rgb(241,90,37)" }}>
          <b>Home / Services</b>
        </h4>
        <h4 style={{ fontWeight: "500" }}>Seafreight</h4>
      </div>
      <br />

      <div className={styles.txt2}>
        <h1>Committed to delivering your products on time every day.</h1>
        <p>
          Complete ocean freight services are at our fingertips. Utilizing high
          productivity carriers in all trade lanes between ports throughout the
          world, Expresshift can handle your shipment from port-to-port or door-to-door
          on a single Bill of Lading. Expresshift’s ocean freight services enable
          businesses and individuals across the world to transport all sizes of
          products or items, from large machinery to oversized vehicles safety
          from one end to the other end of the world. Through its comprehensive
          service of integrated logistics, the company can provide domestic and
          international transportation of containerized (Full Container Load
          (FCL) and Less Than Container Load (LCL)), Oversized Cargo, Roll On –
          Roll Off (ro-ro) Cargo by ocean, air, rail or highway carrier. We
          handle a wide variety of wheeled, trucked, and non-wheeled cargo. Our
          service is cost-effective, yet it is still designed to meet the
          ever-changing demands of customers. Further, it is open to integrate
          with other freight services to offer time-critical high-end solutions.
          Our network is firm, therefore arranges all sorts of documentation at
          the origin of the shipment. From oversized cargo to FCL or LCL, Expresshift
          has managed to earn its position, therefore, enjoy
          restriction-free ocean shipping to Nigeria. We are proficient in our
          work, therefore, assure our customers that here you will enjoy
          complete ocean freight services at your fingertips. Call us now at{" "}
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
  );
};

export default Seafreight;