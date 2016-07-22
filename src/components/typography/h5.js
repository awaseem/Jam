import React from 'react';
import styles from '../../css/skeleton.css';

function H5(props) {
  return (
    <h5 className={styles.h5} style={{ textAlign: props.align }}>{props.children}</h5>
  );
}

H5.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H5;
