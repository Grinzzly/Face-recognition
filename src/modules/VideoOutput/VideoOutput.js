import React, { Component, createRef } from 'react';

import PropTypes from 'prop-types';

import {
  draw,
  TinyFaceDetectorOptions,
  matchDimensions,
  detectAllFaces,
  resizeResults,
} from 'face-api.js';

import './VideoOutput.less';


export class VideoOutput extends Component {
  static get propTypes() {
    return {
      video: PropTypes.instanceOf(MediaStream),
    };
  }

  static get defaultProps() {
    return {
      video: null,
    };
  }

  constructor(props) {
    super(props);

    this.videoRef = createRef();
    this.canvasRef = createRef();
  }

  componentDidMount() {
    const videoObj = this.videoRef.current;
    const { video } = this.props;

    videoObj.srcObject = video;
    videoObj.play()
      .then(videoObj.addEventListener('play', this.initCanvas(videoObj), false));
  }

  initCanvas = (video) => {
    const canvas = this.canvasRef.current;
    const displaySize = { width: video.width, height: video.height };

    matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await detectAllFaces(
        video,
        new TinyFaceDetectorOptions(),
      )
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizedDetections = resizeResults(detections, displaySize);

      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      draw.drawDetections(canvas, resizedDetections);
      draw.drawFaceLandmarks(canvas, resizedDetections);
      draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
  };

  render() {
    return (
      <div>
        <video width="720" height="560" autoPlay muted ref={this.videoRef} />
        <canvas width="720" height="560" ref={this.canvasRef} />
      </div>
    );
  }
}
