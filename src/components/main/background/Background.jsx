import React from "react";
import styles from './background.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Background = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    <div>
      <Carousel 
      additionalTransfrom={0}
      showDots={false}
     arrows
     autoPlay
     autoPlaySpeed={3000}
     centerMode={false}
     className=""
     containerClass="container-with-dots"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     pauseOnHover
     renderArrowsWhenDisabled={false}
     renderButtonGroupOutside={false}
     renderDotsOutside={false}
      responsive={responsive}>
        <div className={styles.img} >
            <img src="./images/bg1.jpg" alt="" width={1264} />
        </div>
        <div>
            <img src="./images/bg2.jpg" alt="" width={1264} />
        </div>
        <div>
        <img src="./images/bg3.jpg" alt="" width={1264} />
        </div>
        <div>
            <img src="./images/bg4.jpg" alt="" width={1264}/>
        </div>
      </Carousel>
    </div>
  );
};

export default Background;
