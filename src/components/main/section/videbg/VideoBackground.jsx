import React, { useState, useEffect } from "react";
import VideoPlayer from "react-background-video-player";

import styles from "./VideoBackground.module.css";

const VideoBackground = () => {
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  function handleBtn  ()  {
    setIsVisible(false);
  };


  function handleClick  ()  {
    setClick(true);
  };

  // useEffect(() => {
  //   setClick(true);
  // },[click])

  return (
    <div className={styles.videobg}>
      <div className={styles.vid_img}>
      <img src="./images/vid_img.png" alt="" />
      </div>
      <div className={styles.vdbtn}>
        {" "}
        {isVisible && <button 
        className={styles.vdbtn}
          onClick={ () => { handleClick(); handleBtn() }}
          class="fa fa-play-circle"
          
        ></button>}
        
      </div>
      {click && (
 <VideoPlayer
 className={styles.video}
 src={"./video.mp4"}
 autoPlay={click}
 pause={false}
 muted={true}
/>
      )}
    </div>
  );
};

export default VideoBackground;
