import React from 'react';
import styles from '../../css/skeleton.css';

function Code(props) {
  return (
    <code className={styles.code}>{props.children}</code>
  );
}

Code.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Code;
