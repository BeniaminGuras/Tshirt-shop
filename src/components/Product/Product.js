import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = props => {


  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = item => {
    return parseInt(props.basePrice + item);
  }

  return (
    <article className={styles.product}>
     <ProductImage name ={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(currentSize.additionalPrice)}$</span>
        </header>
        <ProductForm currentSize={currentSize} currentColor={currentColor} sizes={props.sizes} colors={props.colors} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor}
        price={getPrice} title={props.title}/> 
      </div>
    </article>
  )
};

Product.propTypes = {
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  sizes: PropTypes.array,
  title: PropTypes.string,
};

export default Product;