import React from 'react';

function H4(props) {
  return (
    <h4 style={{ textAlign: props.align }}>{props.children}</h4>
  );
}

H4.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H4;
