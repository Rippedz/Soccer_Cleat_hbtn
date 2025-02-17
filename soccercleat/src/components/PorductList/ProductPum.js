import React from 'react';
import Product from './Product';
import './ProductPum.css';

import PumaJauneVisse from '../PorductList/imgPuma/PumaJauneVisse.jpg';
import PumaBlackMoule from '../PorductList/imgPuma/PumaBlackMoule.jpg';
import UltraVioletVisse from '../PorductList/imgPuma/UltraVioletVisse.jpg';
import UltraOrangeMoule from '../PorductList/imgPuma/UltraOrangeMoule.jpg';

const products = [
  { id: 19, image: PumaJauneVisse , name: 'PUMA Future Ultimate SG - Jaune', price: 220 },
  { id: 20, image: PumaBlackMoule , name: 'PUMA Future Ultimate FG/AG - Black', price: 240 },
  { id: 21, image: UltraVioletVisse , name: 'PUMA Ultra Ultimate SG - Violet', price: 220 },
  { id: 22, image: UltraOrangeMoule , name: 'PUMA Ultra Ultimate FG/AG - Orange', price: 240 },
];

function ProductPum() {
  return (
    <div className="product-Pum">
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

export default ProductPum;
