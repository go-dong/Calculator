import React, { Component } from 'react';
/* Timeset props
* breakGap = breakT
* startTime = sessionT
*/

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state ={
      breakT: 0,
      sessionT: 1000,
      timeType: 'Session',
      timerState: 'running',
      timer: 1500,
      intervalID: '',
    }
    this.timeEnd = this.timeEnd.bind(this);
    this.beginCountDown = this.beginCountDown.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
  }

  timeEnd() {
    if( this.state.timer <= 0 ) {
      this.setState({
        timer: this.state.breakT,
        timeType: 'Break'
      })
    }
  }

  beginCountDown() {
    this.setState({
      intervalID: setInterval(() => {
        this.decrementTimer();
        console.log(this.state.timer);
       }, 1000)
    })
  }

  decrementTimer() {
    this.setState({timer: this.state.timer - 1});
  }
  render() {
    return(
      <div>
        <div>{this.state.timerState}</div>
        <div onClick={this.beginCountDown}>{this.props.toHHMMSS(this.props.store.getState().currentTime)}</div>
      </div>
    )
  }
}

export default Clock;
