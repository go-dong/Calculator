import React, { Component } from 'react';
import logo from './logo.svg';
import * as Actions from './action/actions';
import Timeset from './timeset';
import Clock from './clock';
import Control from './control';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gapLevel: 15
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.store.dispatch(Actions.gapTime(this.state.gapLevel));
  }
  toHHMMSS(time) {
      const myNum = parseInt(time, 10);
      let hours   = Math.floor(myNum / 3600);
      let minutes = Math.floor((myNum - (hours * 3600)) / 60);
      let seconds = myNum - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours+':'+minutes+':'+seconds;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-div">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Timeset className="timeset" store={this.props.store} gapLevel={this.state.gapLevel} toHHMMSS={this.toHHMMSS}/>
          <Clock store={this.props.store} curTime={this.props.store.getState().currentTime} toHHMMSS={this.toHHMMSS}/>
          <Control store={this.props.store} />
          <button onClick={this.handleClick}>STATE-UP_ONE</button>
          <p>gap:{this.props.store.getState().currentGap}<br />time:{this.props.store.getState().currentTime}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGap: state.currentGap,
    currentTime: state.currentTime
  }
}

const Container = connect(mapStateToProps)(App);

export default Container;
