import React, { Component } from 'react';
import * as Actions from './actions';
import * as Defaults from './defaults';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: '',
      resetTime: ''
    }
    this.startCount = this.startCount.bind(this);
    this.pauseCount = this.pauseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  startCount() {
    this.setState({
      curTime: this.props.store.getState().currentTime,
      resetTime: this.props.store.getState().currentTime
    });
    this.timer = setInterval(() => {
      this.setState({
        curTime: this.state.curTime - 1
      });
      console.log("curTime:, ", this.state.curTime);
      if(this.state.curTime < 1) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  pauseCount() {
    if(this.timer) {
      clearInterval(this.timer);
    }
    this.props.store.dispatch(Actions.resetTime(this.state.curTime));
  }
  resetCount() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState({
        curTime: Defaults.defaultTime[1]
      });
    }
    this.timer = null;
    this.props.store.dispatch(Actions.resetTime(Defaults.defaultTime[1]));
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
