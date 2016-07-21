import React from 'react';
import styles from '../../css/skeleton.css';

function CodeBlock(props) {
  return (
    <pre className={styles.pre}><code className={styles.code}>
      {props.children}
    </code></pre>
  );
}

CodeBlock.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default CodeBlock;
