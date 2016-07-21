import React from 'react';
import styles from '../../css/skeleton.css';

function Li(props) {
  return (
    <li className={styles.li}>{props.children}</li>
  );
}

Li.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Li;
