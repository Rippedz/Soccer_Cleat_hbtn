import React from 'react';
import './Product.css';

function Produit({ image, name, price }) {
  return (
    <div className="produit">
      <img src={image} alt={name} className="produit-image" />
      <h3>{name}</h3>
      <h4>{price} €</h4>
    </div>
  );
}

export default Produit;

