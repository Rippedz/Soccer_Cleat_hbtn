import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './ProductPum.css';

import PumaJauneVisse from '../PorductList/imgPuma/PumaJauneVisse.jpg';
import PumaBlackMoule from '../PorductList/imgPuma/PumaBlackMoule.jpg';
import UltraVioletVisse from '../PorductList/imgPuma/UltraVioletVisse.jpg';
import UltraOrangeMoule from '../PorductList/imgPuma/UltraOrangeMoule.jpg';

const products = [
  { id: 1, image: PumaJauneVisse , name: 'PUMA Future Ultimate SG - Jaune', price: 220 },
  { id: 2, image: PumaBlackMoule , name: 'PUMA Future Ultimate FG/AG - Black', price: 240 },
  { id: 3, image: UltraVioletVisse , name: 'PUMA Ultra Ultimate SG - Violet', price: 220 },
  { id: 4, image: UltraOrangeMoule , name: 'PUMA Ultra Ultimate FG/AG - Orange', price: 240 },
];

function ProductPum() {
  return (
    <div className="product-pum">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} state={product} className="product-link">
          <Product image={product.image} name={product.name} price={product.price} />
        </Link>
      ))}
    </div>
  );
}

export default ProductPum;