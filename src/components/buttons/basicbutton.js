import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';

class BounceButton extends React.Component {
  constructor(props) {
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
    this.domNode = ReactDom.findDOMNode(this.refs.bounceButton);
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

  mouseOver() {
    // change animation to scale out
    this.state = { anime: anime({
      targets: this.domNode,
      scale: 1.25,
      delay: 100,
      duration: 500,
    }) };
  }

  mouseLeave() {
    // pause any other animation cycle
    this.state.anime.pause();
    // change animation to scale back in
    this.state = { anime: anime({
      targets: this.domNode,
      scale: 1,
      delay: 100,
      duration: 500,
    }) };
  }

  render() {
    return (
      <button
        className={this.chooseColor(this.props.color)}
        ref="bounceButton"
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
          {this.props.children}
      </button>
    );
  }
}

BounceButton.propTypes = {
  children: React.PropTypes.any.isRequired,
  color: React.PropTypes.string,
};

export default BounceButton;
