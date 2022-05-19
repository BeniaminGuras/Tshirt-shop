import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const Button = (props) => {
    
    const handleClick = e => {
        e.preventDefault();
        addToCart(props.item, props.size, props.color, props.price)
    };
    
    const addToCart = (item, size, color, price) => {
        console.log('You added: ');
        console.log('------------');
        console.log('Nazwa:', item);
        console.log('Color: ', color);
        console.log('Size: ', size);
        console.log('Price: ', price);
    }

    return (<button className={clsx(styles.button, props.className)} onClick={handleClick}>{props.children}</button>);
};

Button.propTypes = {
    color: PropTypes.string,
    item: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
};

export default Button;