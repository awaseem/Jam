import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';
import styles from '../../css/skeleton.css';

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = this.loaded.bind(this);
  }

  loaded() {
    anime({
      targets: ReactDom.findDOMNode(this.refs.image),
      duration: this.props.duration || 5000,
      opacity: 1,
      delay: this.props.delay || 250,
    });
  }

  render() {
    return (
      <img
        ref="image"
        width={this.props.width || '300px'}
        height={this.props.height || 'auto'}
        style={{ opacity: 0 }}
        className={styles['u-max-full-width']}
        src={this.props.src}
        alt={this.props.alt}
        onLoad={this.loaded}
      />
    );
  }
}

Img.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  duration: React.PropTypes.number,
  delay: React.PropTypes.number,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

export default Img;
