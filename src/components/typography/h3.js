import React from 'react';
import styles from '../../css/skeleton.css';

function H3(props) {
  return (
    <h3 className={styles.h3} style={{ textAlign: props.align }}>{props.children}</h3>
  );
}

H3.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H3;
