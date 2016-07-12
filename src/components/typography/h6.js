import React from 'react';

function H6(props) {
  return (
    <h6 style={{ textAlign: props.align }}>{props.children}</h6>
  );
}

H6.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H6;
