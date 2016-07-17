import React from 'react';

function Container(props) {
  return (
    <div
      className="container"
    >{props.children}</div>
  );
}

Container.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default Container;
