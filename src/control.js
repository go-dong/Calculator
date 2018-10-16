import React, { Component } from 'react';

const defaultType = ["pause", "count", "stop"];

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: defaultType[0],
      time: '00:00:00',
    }
    this.timerStart = this.timerStart.bind(this);
    this.timerPause = this.timerPause.bind(this);
    this.timerReset = this.timerReset.bind(this);
  }

  timerStart(event) {
    this.setState({
      type: defaultType[1],
      time: event.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].innerHTML
    });
  }
  timerPause() {
    this.setState({
      type: defaultType[0]
    });
  }
  timerReset() {
    this.setState({
      type: defaultType[2]
    });
  }

  render() {
    return (
      <div className="control-section">
        <div className="timer-control">
          <button id="start_stop" onClick={this.timerStart}>▶</button>
          <button id="start_stop" onClick={this.timerPause}>Ⅱ</button>
          <button id="reset" onClick={this.timerReset}>■</button>
        </div>
      </div>
    )
  }
}

export default Control;
