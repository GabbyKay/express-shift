import React from "react";
import { pnameStyle } from "./data";

export default function Product(props) {
  return (
    <div className='card'>
    <img className='product_image' src={props.url} alt="product_card" />
    <h2 style={pnameStyle}>{props.name}</h2>
    <p className='price'>{props.price}</p>
    {/* <p>some product description</p> */}
    <p>
      <button>Add to Cart</button>
    </p>
  </div>
  );
}