import React, { Component } from 'react';
import logo from './logo.png';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-sign">
            Face detection application
          </p>
        </header>
      </div>
    );
  }
}

export default App;
