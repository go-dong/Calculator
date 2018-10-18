import React, { Component } from 'react';
import * as clockActions from './action/clockAction';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.props.curTime,
      timerState: 'stop',
      intervalID: '',
    }

  }

  timerSP() {
    if(this.state.timerState === 'stop'){
      this.props.store.dispatch(clockActions.decrementTimer(this.state.currentTime, this.state.intervalID))
    } else if(this.state.timerState === 'start') {
      this.props.store.dispatch(clockActions.stopTimer(this.state.currentTime, this.state.intervalID))
    } else {
      this.props.store.dispatch(clockActions.resetTimer(this.state.currentTime, this.state.intervalID))
    }
  }

  render() {
    return(
      <div>
        <div><strong>Pomodoro</strong></div>
        <div onClick={this.timerSP()}>{this.props.toHHMMSS(this.props.curTime)}</div>
        <div className="timer-control">
          <button onClick={this.timerSP} id="start_count">▶</button>
          <button onClick={this.timerSP} id="start_stop">Ⅱ</button>
          <button onClick={this.timerSP} id="reset">■</button>
        </div>
      </div>
    )
  }
}

export default Clock;
