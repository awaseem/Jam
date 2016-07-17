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
      case 'blue':
        return 'button-success';
      default:
        return '';
    }
  }

  mouseOver() {
    // pause any other animation cycle
    if (this.anime) {
      this.anime.pause();
    }
    // change animation to scale out
    this.anime = anime({
      targets: this.domNode,
      scale: 1.25,
      delay: 200,
      duration: 500,
    });
  }

  mouseLeave() {
    this.anime.pause();
    // change animation to scale back in
    this.anime = anime({
      targets: this.domNode,
      scale: 1,
      delay: 200,
      duration: 500,
    });
  }

  render() {
    return (
      <button
        className={this.chooseColor(this.props.color)}
        ref="bounceButton"
        onMouseEnter={this.mouseOver}
        onMouseLeave={this.mouseLeave}
        onClick={this.props.click}
        onDoubleClick={this.props.doubleClick}
      >
          {this.props.children}
      </button>
    );
  }
}

BounceButton.propTypes = {
  children: React.PropTypes.any.isRequired,
  color: React.PropTypes.string,
  click: React.PropTypes.func,
  doubleClick: React.PropTypes.func,
};

export default BounceButton;
