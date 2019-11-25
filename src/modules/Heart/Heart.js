import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import { VideoOutput } from '../VideoOutput';

import './Heart.less';

export class Heart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: null,
    };

    this.getVideo();
  }

  async getVideo() {
    const video = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

    this.setState({ video });
  }

  render() {
    const { video } = this.state;

    return (
      <Jumbotron className="Heart">
        {video ? <VideoOutput video={video} /> : ''}
      </Jumbotron>
    );
  }
}
