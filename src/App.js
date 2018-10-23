import React, { Component } from 'react';
import {
  Heart,
} from './modules';

import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Heart />
      </div>
    );
  }
}

export default App;
