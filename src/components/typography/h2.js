import React from 'react';

function H2(props) {
  return (
    <h2 style={{ textAlign: props.align }}>{props.children}</h2>
  );
}

H2.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H2;
