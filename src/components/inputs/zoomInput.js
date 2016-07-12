import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';

class BounceButton extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }

  componentDidMount() {
    this.domNode = ReactDom.findDOMNode(this.refs.zoomInput);
  }

  focus() {
    // change animation to scale out
    this.state = { anime: anime({
      targets: this.domNode,
      scale: 1.10,
      delay: 100,
      duration: 500,
    }) };
  }

  blur() {
    // change animation to scale in
    this.state = { anime: anime({
      targets: this.domNode,
      scale: 1,
      delay: 100,
      duration: 500,
    }) };
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          onFocus={this.focus}
          onBlur={this.blur}
          className="u-full-width"
          type={this.props.type}
          placeholder={this.props.placeholder}
          ref="zoomInput"
        />
      </div>
    );
  }
}

BounceButton.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
};

export default BounceButton;
