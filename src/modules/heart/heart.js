import React, { Component } from 'react';

import {
  Button,
  Jumbotron,
  Glyphicon,
} from 'react-bootstrap';

import './heart.less';

export class Heart extends Component {
  render() {
    return (
      <Jumbotron className="Heart">
        <div className="Heart-Step Heart-Step__first">
          <h1>
            <Glyphicon
              glyph="facetime-video"
            />
          </h1>

          <p className="Heart-Help lead">
            Make sure that your whole face is visible below.

            <Glyphicon
              className="Heart-Help__icon"
              glyph="question-sign"
              data-placement="bottom"
              data-content="<img src='logo.png' />"
              data-html="true"
            />
          </p>

          <figure className="not-ready">
            <video className="Heart-Video" width="240" autoPlay />
            <canvas width="240" className="visible" />
            <canvas width="240" className="hidden" />
          </figure>

          <Button className="Heart-Button" bsStyle="success" bsSize="large" id="record" disabled>Record</Button>
          <Button className="Heart-Button" bsStyle="success" bsSize="large" id="convert" disabled>Convert to a GIF</Button>
        </div>

        <div className="Heart-Step Heart-Step__second">
          <h1>
            <Glyphicon
              glyph="cog"
            />
          </h1>

          <p className="Heart-Help lead">
            Your recording is being converted to a GIF.
          </p>

          <figure className="Heart-Loading">
            <img alt="Load..." />
          </figure>

          <div className="Heart-Progress">
            <div className="Heart-Progress__bar" id="progressbar" />
          </div>

          <blockquote>
            <p id="conversionResult" />
          </blockquote>

          <Button className="Heart-Button Heart-Button__start-over" bsStyle="default" bsSize="large">Start over</Button>
          <Button className="Heart-Button" bsStyle="success" bsSize="large" id="upload" disabled>Upload to Imgur.com</Button>
        </div>

        <div className="Heart-Step Heart-Step__third">
          <h1>
            <Glyphicon
              glyph="send"
            />
          </h1>

          <p className="Heart-Help lead">
            Your GIF is being uploaded to Imgur.com
          </p>

          <figure className="Heart-Figure">
            <img alt="Uploaded" />
          </figure>

          <blockquote className="Heart-Blockquote">
            <p />
          </blockquote>

          <Button className="Heart-Button Heart-Button__start-over" bsStyle="default" bsSize="large">Start over</Button>
        </div>
      </Jumbotron>
    );
  }
}
