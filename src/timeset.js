import React, { Component } from 'react';
import './timeset.css';

const defaultTime = [0, 86400];


class Timeset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakGap: defaultTime[0],
      startTime: defaultTime[1],
    }
    this.breakUp = this.breakUp.bind(this);
    this.breakDown = this.breakDown.bind(this);
    this.startUp = this.startUp.bind(this);
    this.startDown = this.startDown.bind(this);
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

  breakUp() {
    this.setState({
      breakGap: this.state.breakGap + 15
    });
  }
  breakDown() {
    this.setState({
      breakGap: (this.state.breakGap - 15) < 0 ? 0 : this.state.breakGap - 15
    });
  }
  startUp() {
    this.setState({
      startTime: (this.state.startTime + 1) > 86400 ? 0 : this.state.startTime + 1
    });
  }
  startDown() {
    this.setState({
      startTime: (this.state.startTime - 1) < 0 ? 86400 : this.state.startTime - 1
    });
  }

  render() {
    return (
      <div className="times-section">
        <div className="break-time">
          <p className="time-label">Break Length</p>
          <p className="time-value">{this.state.breakGap}</p>
          <button className="break-up" onClick={this.breakUp}>+</button>
          <button className="break-down" onClick={this.breakDown}>-</button>
        </div>
        <div className="start-time">
          <p className="time-label">Session Length</p>
          <p className="time-value" value={this.state.startTime}>{this.toHHMMSS(this.state.startTime)}</p>
          <button className="start-up" onClick={this.startUp}>+</button>
          <button className="start-down" onClick={this.startDown}>-</button>
        </div>
      </div>
    )
  }
}


export default Timeset;
