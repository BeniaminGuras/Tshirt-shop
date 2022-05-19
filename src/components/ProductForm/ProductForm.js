import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props => {


    return(
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <OptionSize currentSize={props.currentSize} sizes={props.sizes} setCurrentSize={props.setCurrentSize} />
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} />
          </div>
          <Button className={styles.button} color={props.currentColor} size={props.currentSize.name} item={props.title} price={props.price(props.currentSize.additionalPrice)}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductForm.propTypes = {
    colors: PropTypes.array,
    sizes: PropTypes.array,
    currentColor: PropTypes.string,
    currentSize: PropTypes.object,
    price: PropTypes.func,
    setCurrentColor: PropTypes.func,
    setCurrentSize: PropTypes.func,
  };

export default ProductForm;