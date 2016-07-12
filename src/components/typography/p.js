import React from 'react';

function P(props) {
  return (
    <p style={{ textAlign: props.align }}>{props.children}</p>
  );
}

P.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default P;
