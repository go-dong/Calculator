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
    this.toHHMMSS = this.toHHMMSS.bind(this);
    this.timeEnd = this.timeEnd.bind(this);
    this.beginCountDown = this.beginCountDown.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
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
/*
  timerControl() {
    let control = this.state.timerState == 'stopped' ? (
      this.setState({timerState: 'running'})
    ) : (
      this.setState({timerState: 'stopped'})
    )
  }
*/
  render() {
    return(
      <div>
        <div>{this.state.timerState}</div>
        <div onClick={this.beginCountDown}>{this.toHHMMSS(this.state.timer)}</div>
      </div>
    )
  }
}

export default Clock;
