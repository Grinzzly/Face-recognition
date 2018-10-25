import React from 'react';

import { Jumbotron } from 'react-bootstrap';

import { Converter } from '../Converter';
import { Recorder } from '../Recorder';
import { Uploader } from '../Uploader';

import './Heart.less';

export const Heart = () => (
  <Jumbotron className="Heart">
    <Recorder />
    <Converter />
    <Uploader />
  </Jumbotron>
);
