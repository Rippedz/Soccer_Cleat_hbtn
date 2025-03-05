import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <h2>Produit non trouvé</h2>;
  }

  return (
    <div className="product-page">
      {/* Section gauche : Image en background */}
      <div className="product-image-section">
        <div 
          className="image-background" 
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
      </div>

      {/* Section droite : Infos du produit avec overlay */}
      <div className="product-info-container">
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <h3 className="product-price">{product.price} €</h3>

          <label htmlFor="size">Choisir la taille :</label>
          <select id="size">
            {Array.from({ length: 8 }, (_, i) => 38 + i).map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>

          <p className="delivery-info">Livraison en 2-3 jours ouvrés</p>

          <button className="add-to-cart">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

