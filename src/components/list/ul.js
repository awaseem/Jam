import React from 'react';

function Ul(props) {
  return (
    <ul>{props.children}</ul>
  );
}

Ul.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Ul;
