import React from 'react';

function Center(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        borderRadius: 0,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >{props.children}</div>
  );
}

Center.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Center;
