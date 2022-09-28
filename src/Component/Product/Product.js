import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Product.css";

const Product = (props) => {
    // const {handleAddToCart, product} = props
  const { name, price, img, ratings, seller } = props.product;
  
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-detail">
        <h4>Name: {name}</h4>
        <h5>Price: {price}</h5>
        <p>Manufacturer: {seller}</p>
        <p><small>Ratings: {ratings}</small></p>
      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className="add-btn">
        <p>Add to Cart</p> 
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};
 
export default Product;
