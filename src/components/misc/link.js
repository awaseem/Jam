import React from 'react';

function Href(props) {
  return (
    <a href={props.href}>{props.children}</a>
  );
}

Href.propTypes = {
  children: React.PropTypes.any.isRequired,
  href: React.PropTypes.any.isRequired,
};

export default Href;
