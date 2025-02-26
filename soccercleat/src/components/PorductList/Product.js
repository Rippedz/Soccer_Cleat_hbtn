import React from 'react';
import './Product.css';

function Product({ image, name, price }) {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <h4>{price} €</h4>
    </div>
    
  );
}

export default Product;