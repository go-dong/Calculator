import React, { Component } from 'react';
import * as Actions from './actions';
//import * as Defaults from './defaults';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false,
      curTime: '',
      resetTime: ''
    }
    this.startCount = this.startCount.bind(this);
    this.pauseCount = this.pauseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  reset = false;
  startCount() {
    //this.reset = false;
    if(!this.state.reset) {
      this.setState({
        resetTime: this.props.store.getState().currentTime
      });
    }
    this.setState({
      curTime: this.props.store.getState().currentTime
    });
    this.timer = setInterval(() => {
      this.setState({
        curTime: this.state.curTime - 1
      });
      console.log("curTime:, ", this.props.toHHMMSS(this.state.curTime));
      if(this.state.curTime < 1) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  pauseCount() {
    this.setState({
      reset: true
    });
    if(this.timer) {
      clearInterval(this.timer);
      clearInterval(this.counter);
    }
    this.props.store.dispatch(Actions.resetTime(this.state.curTime));
  }
  resetCount() {
    if(this.timer) {
      clearInterval(this.timer);
      clearInterval(this.counter);
      this.setState({
        reset: false,
        curTime: this.state.resetTime
      });
    }
    this.timer = null;
    this.props.store.dispatch(Actions.resetTime(this.state.resetTime));
  }
  render() {
    return (
      <div className="control-section">
        <div className="timer-control">
          <div><strong>Pomodoro</strong></div>
          <div>{!this.timer && this.props.toHHMMSS(this.props.store.getState().currentTime)}</div>
          <div>{this.timer && this.props.toHHMMSS(this.state.curTime)}</div>
          <button id="start_count" onClick={this.startCount}>▶</button>
          <button id="start_stop" onClick={this.pauseCount}>Ⅱ</button>
          <button id="reset" onClick={this.resetCount}>■</button>
        </div>
      </div>
    )
  }
}

export default Control;
