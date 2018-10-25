import React, { Component } from 'react';

import {
  Button,
  Jumbotron,
  Glyphicon,
} from 'react-bootstrap';

import { Recorder } from '../Recorder';

import './Heart.less';

export class Heart extends Component {
  render() {
    return (
      <Jumbotron className="Heart">
        <Recorder />

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
            <img className="Heart-Loading__image" alt="Load..." />
          </figure>

          <div className="Heart-Progress">
            <div className="Heart-Progress__bar" id="progressbar" />
          </div>

          <blockquote>
            <p id="conversionResult" />
          </blockquote>

          <Button className="Heart-Button Heart-Button__start-over" bsStyle="default" bsSize="large">Start over</Button>
          &nbsp;
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
