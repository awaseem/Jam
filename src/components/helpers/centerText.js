import React from 'react';

function CenterText(props) {
  return (
    <div style={{ textAlign: 'center' }}>{props.children}</div>
  );
}

CenterText.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default CenterText;
