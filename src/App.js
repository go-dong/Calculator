import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Timeset from './timeset';
import Clock from './clock';
import Control from './control';

const defaultTime = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: defaultTime
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timeset className="timeset"/>
          <Clock />
          <Control />
        </header>
      </div>
    );
  }
}

export default App;
