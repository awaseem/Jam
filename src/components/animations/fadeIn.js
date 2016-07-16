import React from 'react';
import ReactDom from 'react-dom';
import anime from 'animejs';

class FadeIn extends React.Component {
  componentDidMount() {
    this.anime = anime({
      targets: ReactDom.findDOMNode(this.refs.fadeIn),
      duration: this.props.duration || 5000,
      opacity: 1,
      delay: this.props.delay || 250,
      autoplay: false,
    });
    if (this.props.autoplay) {
      this.anime.play();
    }
  }

  componentDidUpdate() {
    if (this.props.play) {
      this.anime.restart();
    }
  }

  render() {
    return (
      <div ref="fadeIn" style={{ opacity: 0 }}>
        {this.props.children}
      </div>
    );
  }
}

FadeIn.propTypes = {
  children: React.PropTypes.any.isRequired,
  duration: React.PropTypes.number,
  delay: React.PropTypes.number,
  play: React.PropTypes.bool,
  autoplay: React.PropTypes.bool,
};

export default FadeIn;
