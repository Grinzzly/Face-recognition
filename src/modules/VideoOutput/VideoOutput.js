import React, { Component, createRef } from 'react';

import PropTypes from 'prop-types';

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
  }

  componentDidMount() {
    const videoObj = this.videoRef.current;
    const { video } = this.props;

    videoObj.srcObject = video;
    videoObj.play();
  }

  render() {
    return <video id="video" width="720" height="560" autoPlay muted ref={this.videoRef} />;
  }
}
