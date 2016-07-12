import React from 'react';
import ReactDom from 'react-dom';

class Button extends React.Component {
  componentDidMount() {
    this.domNode = ReactDom.findDOMNode(this.refs.Button);
  }

  chooseColor(color) {
    switch (color) {
      case 'red':
        return 'button-primary';
      case 'green':
        return 'button-secondary';
      case 'black':
        return 'button-dark';
      default:
        return '';
    }
  }
}

Button.propTypes = {
  children: React.PropTypes.any.isRequired,
  color: React.PropTypes.string,
};

export default Button;
