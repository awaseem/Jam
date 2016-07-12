import React from 'react';

function H1(props) {
  return (
    <h1 style={{ textAlign: props.align }}>{props.children}</h1>
  );
}

H1.propTypes = {
  children: React.PropTypes.any.isRequired,
  align: React.PropTypes.string,
};

export default H1;
