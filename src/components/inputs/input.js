import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';
import styles from '../../css/skeleton.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.domNode = ReactDom.findDOMNode(this.refs.zoomInput);
    this.domNode.value = this.props.value || '';
  }

  handleChange(e) {
    this.props.change(e.target.value);
  }

  focus() {
    // change animation to scale out
    this.state = { anime: anime({
      targets: this.domNode,
      scale: 1.10,
      duration: 500,
    }) };
  }

  blur() {
    // change animation to scale in
    this.state = { anime: anime({
      targets: this.domNode,
      scale: 1,
      duration: 500,
    }) };
  }

  render() {
    return (
      <div>
        <label className={styles.label}>{this.props.label}</label>
        <input
          onFocus={this.focus}
          onBlur={this.blur}
          className={`${styles['u-full-width']} ${styles.input}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          ref="zoomInput"
          onChange={this.handleChange}
          maxLength={this.props.maxLength}
          disabled={this.props.disabled}
          required={this.props.required}
        />
      </div>
    );
  }
}

Input.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  name: React.PropTypes.string,
  change: React.PropTypes.func.isRequired,
  maxLength: React.PropTypes.number,
  disabled: React.PropTypes.bool,
  required: React.PropTypes.bool,
  value: React.PropTypes.string,
};

export default Input;
