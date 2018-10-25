import React, { Component } from 'react';

import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

import './Converter.less';

export class Converter extends Component {
  render() {
    return (
      <div className="Converter">
        <h1>
          <Glyphicon
            glyph="cog"
          />
        </h1>

        <p className="lead">
          Your recording is being converted to a GIF.
        </p>

        <figure className="Converter-Loading">
          <img className="Converter-Loading__image" alt="Load..." />
        </figure>

        <div className="Converter-Progress">
          <div className="Converter-Progress__bar" id="progressbar" />
        </div>

        <blockquote>
          <p id="conversionResult" />
        </blockquote>

        <Button className="Converter-Button" bsStyle="default" bsSize="large">Start over</Button>
        &nbsp;
        <Button className="Converter-Button" bsStyle="success" bsSize="large" id="upload" disabled>Upload to Imgur.com</Button>
      </div>
    );
  }
}
