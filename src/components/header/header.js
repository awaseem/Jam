import React from 'react';

function Header(props) {
  return (
    <div
      style={{
        height: props.height || '100vh',
        background: `no-repeat center url(${props.image})`,
        paddingTop: props.paddingTop || '250px',
        paddingBottom: props.paddingBottom || '0px',
        backgroundSize: 'cover',
        width: '100%',
        marginBottom: '50px',
        color: props.textColor || '#FFF',
      }}
    >
      {props.children}
    </div>
  );
}

Header.propTypes = {
  children: React.PropTypes.any.isRequired,
  image: React.PropTypes.string.isRequired,
  paddingTop: React.PropTypes.string,
  paddingBottom: React.PropTypes.string,
  textColor: React.PropTypes.string,
  height: React.PropTypes.string,
};

export default Header;
