import React from 'react';
import anime from 'animejs';
import Button from './button';

class RotateButton extends Button {
  render() {
    return (
      <button
        className={this.chooseColor(this.props.color)}
        
      >
        {this.props.children}
      </button>
    );
  }
}

export default RotateButton;
