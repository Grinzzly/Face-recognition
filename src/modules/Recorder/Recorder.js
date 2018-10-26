import React, { Component } from 'react';
import Modernizr from 'modernizr';

import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

import { VIDEO } from '../../utils';

import './Recorder.less';

export class Recorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoSource: '',
    };

    this.videoSettings = {
      video: {
        optional: [
          {
            width: { max: VIDEO.WIDTH },
          },
          {
            height: { max: VIDEO.HEIGHT },
          },
        ],
      },
    };
  }

  componentWillMount() {
    this.searchForFrontCamera()
      .then(this.setupVideo());
  }

  setupVideo(frontCameraId) {
    return new Promise(() => {
      const getUserMedia = Modernizr.prefixed('getUserMedia', navigator);

      /* INFO: if front camera is available - use it */
      if (frontCameraId) {
        this.videoSettings.video.optional.push({
          sourceId: frontCameraId,
        });
      }

      getUserMedia(this.videoSettings, (stream) => {
        /* INFO: Setup the video stream */
        this.setState({ videoSource: window.URL.createObjectURL(stream) });

        window.stream = stream;
      }, () => {
        console.error('There is no access to your camera, have you denied it?');
      });
    });
  }

  searchForFrontCamera() {
    return new Promise((resolve) => {
      if (MediaStreamTrack && MediaStreamTrack.getSources) {
        MediaStreamTrack.getSources((sources) => {
          const rearCameraIds = sources.filter(
            source => (source.kind === 'video' && source.facing === 'user'),
          ).map(source => source.id);

          if (rearCameraIds.length) {
            resolve(rearCameraIds[0]);
          } else {
            resolve(null);
          }
        });
      } else {
        resolve(null);
      }
    });
  }

  handleMetadata() {
    return new Promise((resolve) => {
      let pictureWidth = VIDEO.WIDTH;
      let pictureHeight = VIDEO.HEIGHT;

      if (!pictureWidth && !pictureHeight) {
        /* INFO: Firefox fails to deliver info about video size on time (issue #926753) */
        const waitingForSize = setInterval(() => {
          if (this.videoSettings.video.videoWidth && this.videoSettings.video.videoHeight) {
            pictureWidth = this.videoSettings.video.videoWidth;
            pictureHeight = this.videoSettings.video.videoHeight;

            clearInterval(waitingForSize);
            resolve();
          }
        }, 100);
      } else {
        resolve();
      }
    });
  }

  render() {
    const { videoSource } = this.state;

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
          <video
            className="Record-Video"
            onLoadedMetadata={this.handleMetadata}
            src={videoSource}
            width="240"
            autoPlay
          >
            <track kind="captions" />
          </video>
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
