import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timeset from './timeset';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timeset className="timeset"/>
        </header>
      </div>
    );
  }
}

export default App;
