import {React,  } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Searchbar from "./Searchbar";
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function DropdownNavbar() {


const linkStyle = {
  textDecoration:'none',
  fontWeight:'600',
  // color: isHover? 'rgb(241,90,37)': 'black' ,
  cursor: 'pointer',
}

  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
      <li> <Link to ='/' style={linkStyle}> Home </Link></li>
        <li> <Link to ='/Aboutpage' style={linkStyle} > About </Link></li>
        <li> <Link to = '/RequestQuote' style={linkStyle}>RequestQuote</Link> </li>
        <li> <Link to = '/Servicespage' style={linkStyle}> Services </Link></li>
        <li> <Link to ='/Newspage' style={linkStyle}> News </Link></li> 
        <li> <Link to ='/ContactPage' style={linkStyle}> Contact </Link></li> 
      </ul>

      <div className={styles.right}>
        <Searchbar/>
      {/* <i className="fa fa-search"></i> */}
      <div className={styles.cart_icon}>
      <i className="fa fa-cart-shopping"></i>
      </div>
      </div>
    </div>
  );
}

export default DropdownNavbar;
