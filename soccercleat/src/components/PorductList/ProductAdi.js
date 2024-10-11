import React from 'react';
import Product from './Product';
import './ProductAdi.css';

import AdidasPredFOVisse from '../PorductList/imgAdidas/AdidasPredFOVisse.jpg';
import AdidasPredLSynth from '../PorductList/imgAdidas/AdidasPredLSynth.jpg';
import AdidasPredAMoule from '../PorductList/imgAdidas/AdidasPredAMoule.jpg';
import AdidasF50LVisse from '../PorductList/imgAdidas/AdidasF50LVisse.jpg';
import AdidasF50Moule from '../PorductList/imgAdidas/AdidasF50Moule.jpg';
import AdidasXLVisse from '../PorductList/imgAdidas/AdidasXLVisse.jpg';
import AdidasXSynth from '../PorductList/imgAdidas/AdidasXSynth.jpg';
import AdidasXMoule from '../PorductList/imgAdidas/AdidasXMoule.jpg';

const products = [
  { id: 1, image: AdidasPredFOVisse , name: 'Adidas Predator Elite Fold-over SG - Blanc/Bleu/Rose', price: 280 },
  { id: 2, image: AdidasPredLSynth , name: 'Adidas Predator Elite Laceless AG - Noir/Blanc/Rouge', price: 270 },
  { id: 3, image: AdidasPredAMoule , name: 'Adidas Predator Elite Accuracy FG - Blanc/Noir/Lemon', price: 260 },
  { id: 4, image: AdidasF50LVisse , name: 'Adidas F50 Elite Laceless SG - Blanc/Rouge/Bleu', price: 280 },
  { id: 5, image: AdidasF50Moule , name: 'Adidas F50 Elite FG - Blue/Bleu/Jaune', price: 260 },
  { id: 6, image: AdidasXLVisse , name: 'Adidas X Elite Laceless SG - Jaune/Noir/Blanc', price: 270 },
  { id: 7, image: AdidasXSynth , name: 'Adidas X Elite AG - Rouge/Blanc/Jaune', price: 260 },
  { id: 8, image: AdidasXMoule , name: 'Adidas X Elite FG - Bleu/Blue/Blanc', price: 260 },
];

function ProductAdi() {
  return (
    <div className="product-Adi">
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

export default ProductAdi;

