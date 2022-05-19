import clsx from 'clsx';
import shortid from 'shortid';
import styles from './Option.module.scss';
import PropTypes from 'prop-types';

const OptionSize = props => {

    return(
        <ul className={styles.choices}>
            {props.sizes.map(item => 
            <li key={shortid()}>
                <button type="button" className={clsx(item === props.currentSize && styles.active)} onClick={() => {props.setCurrentSize(item)}}>{item.name}</button>
            </li>
            )}
        </ul>
    )
};

OptionSize.propTypes = {
    sizes: PropTypes.array,
    currentSize: PropTypes.object,
    setCurrentSize: PropTypes.func,
  };

export default OptionSize;