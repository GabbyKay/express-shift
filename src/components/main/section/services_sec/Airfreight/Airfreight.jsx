import React from 'react'
import Head from '../../../../header/head/Head'
import styles from '../style.module.css'
import Footer from '../../footer_sec/Footer'
const Airfreight = () => {
  return (
    <div>
      <Head/>
      <div className={styles.head_img}>
      <img
            src="https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
      </div>
      <div className={styles.txt}> 
        <h4 style={{color:'rgb(241,90,37)'}} ><b>Home / Services</b></h4>
        <h4 style={{fontWeight:'500'}}>Airfreight</h4>
      </div>
      
      <div className={styles.txt2}>
        <h1>We are your reliable cargo solution.</h1>
        <p>ExpressShift shipping serivices is top-notch when it comes to air transportation. We understand why you choose air transportation and strive to justify that choice. We stay in communication with our customers throughout the process by phone, electronic communication, and our online tracking system. We don’t just say this, we do it; take the hassle off air cargo shipment.

Air Cargo service of <b style={{color:'rgb(241,90,37)'}}>ExpressShift Shipping</b> entertains the shipment needs of numerous businesses and individuals. Our Air Freight service effectively handles all types of cargoes irrespective of their size and the material shipping in it.

There will be no restriction on the cargo, from our edge. We have promised our customers for safe delivery, and no matter what, we will stand out for that. We have a strong network to assist us in the quick delivery. Moreover, this Air shipping to Nigeria is available at affordable rates. That is the reason why we are miles away from our competitors.

Apart from this, we are the common face of the companies which are in the business of gas and oil manufacturing and involved in Airfreight transportation. Request for the free quote with us now!

Call us now at <b style={{color:'black'}}>+2348146079030</b> to speak to a consolidation specialist or email us at <b style={{color:'rgb(241,90,37)'}}>info@Expresshift.com.</b> </p>
      </div>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default Airfreight