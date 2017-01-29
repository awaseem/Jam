import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';
import styles from '../../css/skeleton.css';

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
        return styles['button-primary'];
      case 'green':
        return styles['button-secondary'];
      case 'black':
        return styles['button-dark'];
      case 'blue':
        return styles['button-success'];
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
        className={`${styles.button} ${this.chooseColor(this.props.color)}`}
        ref="bounceButton"
        onMouseEnter={this.props.enable ? this.mouseOver : undefined}
        onMouseLeave={this.props.enable ? this.mouseLeave : undefined}
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
  enable: React.PropTypes.bool,
  color: React.PropTypes.string,
  click: React.PropTypes.func,
  doubleClick: React.PropTypes.func,
};

export default BounceButton;
