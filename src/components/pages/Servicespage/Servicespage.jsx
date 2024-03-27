import React from 'react'
import Head from '../../header/head/Head'
import styles from './Servicespage.module.css'
import Services from '../../main/section/services_sec/Services'
import Footer from '../../main/section/footer_sec/Footer'
import { Link } from 'react-router-dom'

const Servicespage = () => {
  return (
    <div>
    
    <Head/>
    
    <div className={styles.about_header}>
      <img src="./images/latestp4.jpg" alt="" />
      <div className={styles.about_text}>
      <h1>Services</h1>
      <div className={styles.subheader}>
        <Link to = '/' >
        <h5 style={{color:' rgb(241,90,37)'}}>Home</h5>
        </Link>
        
        /
        <h5> Services</h5>
      </div>
      </div>
    </div>
    <div className={styles.atext}>
    <Services />
    </div>

    <div className={styles.footer}>
      <Footer/>
    </div>
  </div>
  )
}

export default Servicespage