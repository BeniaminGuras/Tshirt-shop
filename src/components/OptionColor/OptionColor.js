import clsx from 'clsx';
import shortid from 'shortid';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = props => {
    return(
        <ul className={styles.choices}>
            {props.colors.map(item =>
            <li key={shortid()}>
                <button type="button" className={clsx(styles['color' + item[0].toUpperCase() + item.substr(1).toLowerCase()], item === props.currentColor && styles.active)} onClick={() => {props.setCurrentColor(item)}} />
            </li>
            )}
        </ul>
    )
};

OptionColor.propTypes = {
    colors: PropTypes.array,
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
  };

export default OptionColor;