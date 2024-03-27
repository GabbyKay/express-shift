import React from "react";
import styles from './blog.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsPage from "../../../pages/Newspage/Newspage";
import { Link } from "react-router-dom";


const Blog_sec = () => {

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
    <div className={styles.blog_full_container}>
        <div className={styles.h1_h4}>
        <h4>OUR NEWS FROM BLOG</h4>
      <h1>Latest News, Advices & Best Posts From the Blog</h1>
        </div>
        <div className={styles.carousel}>
        <Carousel 
     arrows
     autoPlay
     autoPlaySpeed={2000}
     draggable
     infinite
     minimumTouchDrag={80}
     pauseOnHover
        responsive={responsive}>
       <div className={styles.inner_box}>
          <img src="./images/latestp2.jpg" alt="" />
          <div className={styles.img_content}>
          <div className={styles.subheader}>
            <div className={styles.user_icon}>
            <img src="./images/icons8-user-24.png" alt="" width={50} />
            <h5>by Admin</h5>

            </div>
            
            <div className={styles.comment_icon}>
            <img src="./images/icons8-comments-48.png" alt="" width={50} />
            <h5>2 Comments</h5>
            </div>
          </div>
          <div className={styles.sub_content}>
          <h3>
Food waste problem for NZ kiwi exports</h3>
          </div>
          <button className={styles.btn} >Read More</button>

          </div>
        </div>
        {/* item2  */}

        <div className={styles.inner_box}>
          <img src="./images/pexels-frans-van-heerden-2894836.jpg" alt="" />
          <div className={styles.img_content}>
          <div className={styles.subheader}>
            <div className={styles.user_icon}>
            <img src="./images/icons8-user-24.png" alt="" width={50} />
            <h5>by Admin</h5>

            </div>
            
            <div className={styles.comment_icon}>
            <img src="./images/icons8-comments-48.png" alt="" width={50} />
            <h5>2 Comments</h5>
            </div>
          </div>
          <div className={styles.sub_content}>
          <h3>
SeaCube supporting decarbonisation</h3>
          </div>
          <Link to = './Newspage'>
          <button className={styles.btn} >Read More</button>
          </Link>
          

          </div>
        </div>

        {/* item3  */}

        <div className={styles.inner_box}>
          <img src="./images/pexels-rodnae-productions-6646984.jpg" alt="" />
          <div className={styles.img_content}>
          <div className={styles.subheader}>
            <div className={styles.user_icon}>
            <img src="./images/icons8-user-24.png" alt="" width={50} />
            <h5>by Admin</h5>

            </div>
            
            <div className={styles.comment_icon}>
            <img src="./images/icons8-comments-48.png" alt="" width={50} />
            <h5>2 Comments</h5>
            </div>
          </div>
          <div className={styles.sub_content}>
          <h3>Electric straddle carrier from KonecranesLinked </h3>
          </div>
          <Link to = './Newspage'>
          <button className={styles.btn} >Read More</button>
          </Link>
          

          </div>
        </div>
        {/* item4  */}

        <div className={styles.inner_box}>
          <img src="./images/pexels-david-dibert-1117210 (1).jpg" alt="" />
          <div className={styles.img_content}>
          <div className={styles.subheader}>
            <div className={styles.user_icon}>
            <img src="./images/icons8-user-24.png" alt="" width={50} />
            <h5>by Admin</h5>

            </div>
            
            <div className={styles.comment_icon}>
            <img src="./images/icons8-comments-48.png" alt="" width={50} />
            <h5>7 Comments</h5>
            </div>
          </div>
          <div className={styles.sub_content}>
          <h3>Cargo flow through better supply in UK</h3>
          </div>
          <Link to = './Newspage'>
          <button className={styles.btn} >Read More</button>
          </Link>
          

          </div>
        </div>
        {/* item5  */}
        <div className={styles.inner_box}>
          <img src="./images/pexels-tom-fisk-3338019.jpg" alt="" />
          <div className={styles.img_content}>
          <div className={styles.subheader}>
            <div className={styles.user_icon}>
            <img src="./images/icons8-user-24.png" alt="" width={50} />
            <h5>by Admin</h5>

            </div>
            
            <div className={styles.comment_icon}>
            <img src="./images/icons8-comments-48.png" alt="" width={50} />
            <h5>10 Comments</h5>
            </div>
          </div>
          <div className={styles.sub_content}>
          <h3>Jaxport issues RFP for TalleyrandLinked </h3>
          </div>
          <Link to = './Newspage'>
          <button className={styles.btn} >Read More</button>
          </Link>
          

          </div>
        </div>
        {/* item6  */}
        <div className={styles.inner_box}>
          <img src="./images/pexels-markus-spiske-3970328.jpg" alt="" />
          <div className={styles.img_content}>
          <div className={styles.subheader}>
            <div className={styles.user_icon}>
            <img src="./images/icons8-user-24.png" alt="" width={50} />
            <h5>by Admin</h5>

            </div>
            
            <div className={styles.comment_icon}>
            <img src="./images/icons8-comments-48.png" alt="" width={50} />
            <h5>12 Comments</h5>
            </div>
          </div>
          <div className={styles.sub_content}>
          <h3>Electric ECH for CARU Containers</h3>
          </div>
          <Link to = './Newspage'>
          <button className={styles.btn} >Read More</button>
          </Link>
          

          </div>
        </div>
       </Carousel>
        </div>
    
    </div>
  );
};

export default Blog_sec;
