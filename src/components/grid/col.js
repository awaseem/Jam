import React from 'react';

function Col(props) {
  return (
    <div className={`${props.num} ${props.num === 'one' ? 'column' : 'columns'}`}>
      {props.children}
    </div>
  );
}

Col.propTypes = {
  children: React.PropTypes.any.isRequired,
  num: React.PropTypes.string.isRequired,
};

export default Col;
