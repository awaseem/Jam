import React from 'react';

function Bold(props) {
  return (
    <b>{props.children}</b>
  );
}

Bold.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Bold;
