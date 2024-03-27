import React from "react";
import styles from "./latestproject.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Latecstproject = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.latest_project_sec}>
      <div className={styles.latest_sec_head}>
        <h4>LATEST PROJECTS</h4>
        <h1>Works across the world</h1>
      </div>
      <div className={styles.Carousel}>
        <Carousel   additionalTransfrom={0}
      showDots={false}
     arrows
     autoPlay
     autoPlaySpeed={2000}
     centerMode={false}
     draggable
     focusOnSelect={false}
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     pauseOnHover
     renderDotsOutside={false} responsive={responsive} >
          <div className={styles.latest}>
            <img src="./images/latestp1.jpg" alt="" />
            <h5>AirFreight</h5>
            <h3>Special Transport</h3>
          </div>  

           <div className={styles.latest}>
            <img src="./images/latestp2.jpg" alt="" />
            <h5>Road Services</h5>
            <h3>Special Transport</h3>
          </div>  

           {/* <div className={styles.latest}>
            <img src="./images/latestp3.jpg" alt="" />
            <h5>Road Services</h5>
            <h3>Special Transport</h3>
          </div>   */}

           <div className={styles.latest}>
            <img src="./images/latestp4.jpg" alt="" />
            <h5>Delivery</h5>
            <h3>Special Transport</h3>
          </div>  

           <div className={styles.latest}>
            <img src="./images/latestp5.jpg" alt="" />
            <h5>Warehousing</h5>
            <h3>Special Transport</h3>
          </div>  
          
             
        </Carousel>
      </div>
    </div>
  );
};

export default Latecstproject;
