import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import { nets } from 'face-api.js';

import { VideoOutput } from '../VideoOutput';

import './Heart.less';

export class Heart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: null,
    };

    this.initFaceApi()
      .then(this.getVideo());
  }

  async getVideo() {
    const video = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

    this.setState({ video });
  }

  initFaceApi() {
    return Promise.all([
      nets.tinyFaceDetector.loadFromUri('/models'),
      nets.faceLandmark68Net.loadFromUri('/models'),
      nets.faceRecognitionNet.loadFromUri('/models'),
      nets.faceExpressionNet.loadFromUri('/models'),
    ]);
  }

  render() {
    const { video } = this.state;

    return (
      <Jumbotron id="heart" className="Heart">
        {video ? <VideoOutput video={video} /> : ''}
      </Jumbotron>
    );
  }
}
