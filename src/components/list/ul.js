import React from 'react';
import styles from '../../css/skeleton.css';

function Ul(props) {
  return (
    <ul className={styles.ul}>{props.children}</ul>
  );
}

Ul.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Ul;
