import React from 'react';

function Center(props) {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>{props.children}</div>
  );
}

Center.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Center;
