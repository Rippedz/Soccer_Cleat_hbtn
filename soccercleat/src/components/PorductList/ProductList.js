import React from 'react';
import Product from './Product';
import './ProductList.css';

import TiempoNoirVisse from '../PorductList/imgNike/TiempoNoirVisse.jpg';
import TiempoVertSynth from '../PorductList/imgNike/TiempoVertSynth.jpg';
import TiempoPinkFull from '../PorductList/imgNike/TiepoPinkFull.jpg';
import MercuBleuVisse from '../PorductList/imgNike/MercuBleuVisse.jpg';
import MercuMulticSynth from '../PorductList/imgNike/MercuMulticSynth.jpg';
import MercuSupBlancmoule from '../PorductList/imgNike/MercuSupBlancmoule.jpg';
import PhanGrisVisse from '../PorductList/imgNike/PhanGrisVisse.jpg';
import PhantBlancNoirDoréSynth from '../PorductList/imgNike/PhantBlancNoirDoréSynth.jpg';
import PhanRedMoule from '../PorductList/imgNike/PhanRedMoule.jpg';

const products = [
  { id: 1, image: TiempoNoirVisse , name: 'Nike Tiempo Elite SG-PRO - Noir', price: 250 },
  { id: 2, image: TiempoVertSynth , name: 'Nike Tiempo AG-PRO - Vert', price: 240 },
  { id: 3, image: TiempoPinkFull , name: 'Nike Tiempo FG-PRO - Rose', price: 260 },
  { id: 4, image: MercuBleuVisse , name: 'Nike Air Zoom Mercurial SG-PRO - Bleu', price: 270 },
  { id: 5, image: MercuMulticSynth , name: 'Nike Air Zoom Mercurial AG-PRO - Multicouleur ', price: 240 },
  { id: 6, image: MercuSupBlancmoule , name: 'Nike Air Zoom Mercurial Superfly FG-PRO - Blanc/Bleu ', price: 290 },
  { id: 7, image: PhanGrisVisse , name: 'Nike Phantom GX II Elite SG-PRO - Gris', price: 270 },
  { id: 8, image: PhantBlancNoirDoréSynth , name: 'Nike Phantom GX II Elite AG-PRO - Blanc/Noir/Dorée', price: 240 },
  { id: 9, image: PhanRedMoule , name: 'Nike Phantom GX II Elite FG-PRO - Rouge', price: 260 },
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
