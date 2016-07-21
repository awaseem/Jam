import React from 'react';
import styles from '../../css/skeleton.css';

function Row(props) {
  return (
    <div className={styles.row}>{props.children}</div>
  );
}

Row.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Row;
