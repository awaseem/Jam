import React from 'react';
import H1 from './typography/h1';
import H2 from './typography/h2';
import H3 from './typography/h3';
import H4 from './typography/h4';
import H5 from './typography/h5';
import H6 from './typography/h6';
import P from './typography/p';
import FadeIn from './animations/fadeIn';
import BounceButton from './buttons/basicbutton';
import ZoomInput from './inputs/zoomInput';
import ZoomTextArea from './inputs/zoomTextArea';

export default function () {
  return (
    <div className="container">
      <FadeIn delay={250}>
        <H1 align="center">JAM</H1>
        <P align="center">Sweat and Simple</P>
      </FadeIn>
      <FadeIn delay={500}>
        <H2>Typography</H2>
        <H1>Heading</H1>
        <H2>Heading</H2>
        <H3>Heading</H3>
        <H4>Heading</H4>
        <H5>Heading</H5>
        <H6>Heading</H6>
        <P>Paragraph</P>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={750}>
        <H2>Buttons</H2>
        <H5>Hover Bounce Button</H5>
        <P>Without color</P>
        <div className="row"><BounceButton>Hello</BounceButton></div>
        <P>With color</P>
        <div className="row">
          <div className="two columns">
            <BounceButton color="red">Hello</BounceButton>
          </div>
          <div className="two columns">
            <BounceButton color="green">Hello</BounceButton>
          </div>
          <div className="two columns">
            <BounceButton color="black">Hello</BounceButton>
          </div>
        </div>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={1000}>
        <H2>Inputs</H2>
        <H5>Zoom inputs</H5>
        <div className="row">
          <div className="six columns">
            <ZoomInput label="Email" placeholder="test@test.com" type="email" />
          </div>
          <div className="six columns">
            <ZoomInput label="Name" placeholder="Jon Doe" type="text" />
          </div>
          <div className="twelve columns">
            <ZoomTextArea label="Message" placeholder="Enter your message here" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

