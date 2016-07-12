import React from 'react';
import BounceButton from './buttons/basicbutton';
import ZoomInput from './inputs/zoomInput';
import ZoomTextArea from './inputs/zoomTextArea';

export default function () {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Jam</h1>
      <p style={{ textAlign: 'center' }}>Sweat and Simple</p>
      <h2>Buttons</h2>
      <h5>Hover Bounce Button</h5>
      <p>Without color</p>
      <div className="row"><BounceButton>This is a test</BounceButton></div>
      <p>With color</p>
      <div className="row">
        <div className="three columns"><BounceButton color="red">This is a test</BounceButton></div>
        <div className="three columns"><BounceButton color="green">This is a test</BounceButton></div>
        <div className="three columns"><BounceButton color="black">This is a test</BounceButton></div>
      </div>
      <hr></hr>
      <h2>Inputs</h2>
      <h5>Zoom inputs</h5>
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
    </div>
  );
}

