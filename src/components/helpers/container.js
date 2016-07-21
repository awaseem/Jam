import React from 'react';
import styles from '../../css/skeleton.css';

function Container(props) {
  return (
    <div
      className={styles.container}
    >{props.children}</div>
  );
}

Container.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Container;
