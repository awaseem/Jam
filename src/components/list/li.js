import React from 'react';

function Li(props) {
  return (
    <li>{props.children}</li>
  );
}

Li.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Li;
