import React, { Component } from 'react';
import * as Actions from './actions';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: this.props.store.getState().currentTime
    }
    this.startTimer = this.startTimer.bind(this);
    this.timerPause = this.timerPause.bind(this);
    this.timerReset = this.timerReset.bind(this);
  }
  startTimer() {
    this.props.store.dispatch(Actions.countDown(this.props.store.getState().currentTime))
  }
  timerPause() {
    if(this.timer !== null) {
      clearInterval(this.timer);
    }
  }
  timerReset() {
    if(this.timer !== null) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="control-section">
        <div className="timer-control">
          <button id="start_stop" onClick={this.startTimer}>▶</button>
          <button id="start_stop" onClick={this.timerPause}>Ⅱ</button>
          <button id="reset" onClick={this.timerReset}>■</button>
        </div>
      </div>
    )
  }
}

export default Control;
