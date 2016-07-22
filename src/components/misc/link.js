import React from 'react';
import styles from '../../css/skeleton.css';

function Href(props) {
  return (
    <a className={styles.a} href={props.href}>{props.children}</a>
  );
}

Href.propTypes = {
  children: React.PropTypes.any.isRequired,
  href: React.PropTypes.any.isRequired,
};

export default Href;
