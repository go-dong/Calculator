import React, { Component } from 'react';
import './timeset.css';

const defaultTime = [0, "24:00"];

class Timeset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakGap: defaultTime[0],
      startTime: defaultTime[1]
    }
    this.breakUp = this.breakUp.bind(this);
    this.breakDown = this.breakDown.bind(this);
    this.startUp = this.startUp.bind(this);
    this.startDown = this.startDown.bind(this);
  }

  breakUp() {
    this.setState({
      breakGap: this.state.breakGap + 15
    });
  }
  breakDown() {
    this.setState({
      breakGap: this.state.breakGap - 15
    });
  }
  startUp() {}
  startDown() {}

  render() {
    return (
      <div className="times-section">
        <div className="break-time">
          <p className="time-label">{this.state.breakGap}</p>
          <button className="break-up" onClick={this.breakUp}>Up</button>
          <button className="break-down" onClick={this.breakDown}>Down</button>
        </div>
        <div className="start-time">
          <p className="time-label">{this.state.startTime}</p>
          <button className="start-up" onClick={this.startUp}>Up</button>
          <button className="start-down" onClick={this.startDown}>Down</button>
        </div>
      </div>
    )
  }
}

export default Timeset;
