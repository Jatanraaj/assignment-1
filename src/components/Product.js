// src/components/Product.js

import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';




  const Product = ({ product }) => {
  const dispatch = useDispatch();
  const {items}=useSelector((state)=>state.cart);
  // const cartItems = useSelector((state) => state.cart.items);
  console.log(items);


  const handleClick = () => {
    dispatch(addToCart(product,items));
  };

  return (
    
    <div key={product.id} className="col-xs-12 col-md-4">
    <div className="card productcard">
      <img className="card-img-top img-fluid" src={product.image} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
        <p className="card-text">{product.description}</p>
        <button class="btn btn-success" onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
  </div>
  
  );
};

export default Product;