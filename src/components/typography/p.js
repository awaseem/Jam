import React from 'react';
import styles from '../../css/skeleton.css';

function P(props) {
  return (
    <p className={styles.p} style={{ textAlign: props.align }}>{props.children}</p>
  );
}

P.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default P;
