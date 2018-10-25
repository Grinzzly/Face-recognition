import React, { Component } from 'react';

import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

import './Uploader.less';

export class Uploader extends Component {
  render() {
    return (
      <div className="Uploader">
        <h1>
          <Glyphicon
            glyph="send"
          />
        </h1>

        <p className="lead">
          Your GIF is being uploaded to Imgur.com
        </p>

        <figure className="Uploader-Figure">
          <img alt="Uploaded" />
        </figure>

        <blockquote className="Uploader-Blockquote">
          <p />
        </blockquote>

        <Button className="Uploader-Button" bsStyle="default" bsSize="large">Start over</Button>
      </div>
    );
  }
}
