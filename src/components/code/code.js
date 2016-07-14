import React from 'react';

function Code(props) {
  return (
    <code>{props.children}</code>
  );
}

Code.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Code;
