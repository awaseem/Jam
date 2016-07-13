import React from 'react';

function Ol(props) {
  return (
    <ol>{props.children}</ol>
  );
}

Ol.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Ol;
