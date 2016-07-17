import React from 'react';

function Emp(props) {
  return (
    <em>{props.children}</em>
  );
}

Emp.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Emp;
