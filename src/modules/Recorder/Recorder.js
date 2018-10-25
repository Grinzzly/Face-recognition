import React, { Component } from 'react';

import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

import './Recorder.less';

export class Recorder extends Component {
  render() {
    return (
      <div className="Record">
        <h1>
          <Glyphicon
            glyph="facetime-video"
          />
        </h1>

        <p className="Record-Help lead">
          Make sure that your whole face is visible below.

          <Glyphicon
            className="Record-Help__icon"
            glyph="question-sign"
            data-placement="bottom"
            data-content="<img src='logo.png' />"
            data-html="true"
          />
        </p>

        <figure className="Record-Figure Record-Figure__not-ready">
          <video className="Record-Video" width="240" autoPlay />
          <canvas width="240" className="Record-Canvas Record-Canvas__visible" />
          <canvas width="240" className="Record-Canvas Record-Canvas__hidden" />
        </figure>

        <Button className="Record-Button" bsStyle="success" bsSize="large" id="record" disabled>Record</Button>
        &nbsp;
        <Button className="Record-Button" bsStyle="success" bsSize="large" id="convert" disabled>Convert to a GIF</Button>
      </div>
    );
  }
}
