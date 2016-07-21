import React from 'react';
import styles from '../../css/skeleton.css';

function Ol(props) {
  return (
    <ol className={styles.ol}>{props.children}</ol>
  );
}

Ol.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Ol;
