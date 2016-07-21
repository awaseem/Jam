import React from 'react';
import styles from '../../css/skeleton.css';

function Col(props) {
  const colNum = props.num;
  return (
    <div className={`${styles[colNum]} ${props.num === 'one' ? styles.column : styles.columns}`}>
      {props.children}
    </div>
  );
}

Col.propTypes = {
  children: React.PropTypes.any.isRequired,
  num: React.PropTypes.string.isRequired,
};

export default Col;
