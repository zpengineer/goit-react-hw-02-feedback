import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ keys, onIncrement }) => {
  return (
    <ul className={styles.list}>
      {keys.map((key, index) => (
        <li key={index} className={styles.item}>
          <button className={styles.button} value={key} onClick={onIncrement}>
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

Controls.propType = {
  keys: PropTypes.arrayOf(PropTypes.string.isRequired),
  onIncrement: PropTypes.func.isRequired,
};

export default Controls;
