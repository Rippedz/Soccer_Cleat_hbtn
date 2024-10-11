import React from 'react';
import './Product.css';

function Product({ image, name, price }) {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{price} €</p>
      <div style={{ background: 'none', minHeight: '100vh' }}>
    </div>
    </div>
    
  );
}

export default Product;

