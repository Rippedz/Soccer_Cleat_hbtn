import React from 'react';
import Product from './Product';
import './ProductAdi.css';

import AdidasPredFOV from '../PorductList/imgAdidas/AdidasPredFOVisse.jpg';
import AdidasPredLS from '../PorductList/imgAdidas/AdidasPredLSynth.jpg';
import AdidasPredAM from '../PorductList/imgAdidas/AdidasPredAMoule.jpg';
import AdidasF50LV from '../PorductList/imgAdidas/AdidasF50LVisse.jpg';
import AdidasF50M from '../PorductList/imgAdidas/AdidasF50Moule.jpg';
import AdidasXLV from '../PorductList/imgAdidas/AdidasXLVisse.jpg';
import AdidasXS from '../PorductList/imgAdidas/AdidasXSynth.jpg';
import AdidasXM from '../PorductList/imgAdidas/AdidasXMoule.jpg';

const products = [
  { id: 10, image: AdidasPredFOV , name: 'Adidas Predator Elite Fold-over SG - Blanc', price: 280 },
  { id: 12, image: AdidasPredLS , name: 'Adidas Predator Elite Laceless AG - Noir', price: 270 },
  { id: 13, image: AdidasPredAM , name: 'Adidas Predator Elite Accuracy FG - Lemon', price: 260 },
  { id: 14, image: AdidasF50LV , name: 'Adidas F50 Elite Laceless SG - Blanc', price: 280 },
  { id: 15, image: AdidasF50M , name: 'Adidas F50 Elite FG - Blanc', price: 260 },
  { id: 16, image: AdidasXLV , name: 'Adidas X Elite Laceless SG - Jaune', price: 270 },
  { id: 17, image: AdidasXS , name: 'Adidas X Elite AG - Rouge', price: 260 },
  { id: 18, image: AdidasXM , name: 'Adidas X Elite FG - Bleu', price: 260 },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product 
          key={product.id} 
          image={product.image} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

export default ProductList;


