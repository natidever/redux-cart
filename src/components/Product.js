import React from "react";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import {cartActions} from "../store/cardSlice"
const Product = ({ name, id, imgURL, price }) => {
const itemsList = useSelector(state=>state.cart.listOfItems)
console.log(itemsList)
  const dispatch= useDispatch()
  const addToCarts=()=>{
    dispatch(cartActions.addToCart(
      id,
      name,
      price
    ))
  
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCarts}>Add to cart</button>
    </div>
  );
};

export default Product;
