import React from 'react';

function Underline(props) {
  return (
    <u>{props.children}</u>
  );
}

Underline.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Underline;
