import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
     {products.map( n => <Product {...n} key={n.colors} /> )}
    </section>
  );
};

export default Products;