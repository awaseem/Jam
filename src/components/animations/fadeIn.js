import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';

class FadeIn extends React.Component {

  componentDidMount() {
    anime({
      targets: ReactDom.findDOMNode(this.refs.div),
      duration: this.props.duration || 5000,
      opacity: 1,
      delay: this.props.delay || 250,
    });
  }

  render() {
    return (
      <div ref="div" style={{ opacity: 0 }}>
        {this.props.children}
      </div>
    );
  }
}

FadeIn.propTypes = {
  children: React.PropTypes.any.isRequired,
  duration: React.PropTypes.number,
  delay: React.PropTypes.number,
};

export default FadeIn;
