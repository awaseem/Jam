import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';
import styles from '../../css/skeleton.css';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.domNode = ReactDom.findDOMNode(this.refs.zoomInput);
  }

  handleChange(e) {
    this.props.change(e.target.value);
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
        <textarea
          onFocus={this.focus}
          onBlur={this.blur}
          className={styles['u-full-width']}
          placeholder={this.props.placeholder}
          ref="zoomInput"
          name={this.props.name}
          maxLength={this.props.maxLength}
          required={this.props.required}
          disabled={this.props.disabled}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  change: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool,
  required: React.PropTypes.bool,
  maxLength: React.PropTypes.number,
  name: React.PropTypes.string,
};

export default TextArea;
