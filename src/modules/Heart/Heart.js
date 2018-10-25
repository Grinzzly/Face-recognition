import React, { Component } from 'react';

import {
  Button,
  Jumbotron,
  Glyphicon,
} from 'react-bootstrap';

import { Converter } from '../Converter';
import { Recorder } from '../Recorder';

import './Heart.less';

export class Heart extends Component {
  render() {
    return (
      <Jumbotron className="Heart">
        <Recorder />
        <Converter />

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
