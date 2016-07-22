import React from 'react';
import styles from '../../css/skeleton.css';

function H6(props) {
  return (
    <h6 className={styles.h6} style={{ textAlign: props.align }}>{props.children}</h6>
  );
}

H6.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H6;
