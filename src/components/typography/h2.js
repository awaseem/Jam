import React from 'react';
import styles from '../../css/skeleton.css';

function H2(props) {
  return (
    <h2 className={styles.h2} style={{ textAlign: props.align }}>{props.children}</h2>
  );
}

H2.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H2;
