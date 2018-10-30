import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

import { Converter } from '../Converter';
import { Recorder } from '../Recorder';
import { Uploader } from '../Uploader';
import { checker } from '../../utils';

import './Heart.less';

export class Heart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flameFrames: [],
    };

    this.initialLoading();
  }

  initialLoading() {
    checker()
      .then(() => this.loadImages())
      .then(() => {
        /*
        * TODO: Enable record button
        * TODO: Hide the enable the camera sign
        */
      })
      .catch(error => new Error(error));
  }

  loadImage(number) {
    /*
    * TODO: to be replaced by cloud upload
    * INFO: probably...idk
    */

    return new Promise((resolve) => {
      const img = new Image();

      img.src = `images/flame/${number}.png`;
      img.onload = () => resolve(img);
    });
  }

  loadImages() {
    const promises = [];

    /*
    * TODO: amount of images hardcoded for time being
    * INFO: for sure
    */
    // eslint-disable-next-line
    for (let i = 1; i < 14; i++) {
      promises.push(this.loadImage(i));
    }

    Promise.all(promises).then((loadedImages) => {
      this.setState({
        flameFrames: loadedImages,
      });
    });
  }

  render() {
    const { flameFrames } = this.state;

    return (
      <Jumbotron className="Heart">
        <Recorder flameFrames={flameFrames} />
        <Converter />
        <Uploader />
      </Jumbotron>
    );
  }
}
