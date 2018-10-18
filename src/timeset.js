import React, { Component } from 'react';
import './css/timeset.css';
import * as Actions from './action/actions';


class Timeset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTimeLevel: 1
    }
    this.gapPlusClick = this.gapPlusClick.bind(this);
    this.gapMinusClick = this.gapMinusClick.bind(this);
    this.timePlusClick = this.timePlusClick.bind(this);
    this.timeMinusClick = this.timeMinusClick.bind(this);
  }

  gapPlusClick() {
    this.props.store.dispatch(Actions.gapTime(this.props.gapLevel));
  }
  gapMinusClick() {
    this.props.store.dispatch(Actions.gapTime(-this.props.gapLevel));
  }
  timePlusClick() {
    this.props.store.dispatch(Actions.countTime(this.props.store.getState().currentGap));
    console.log(this.props.store.getState().currentTime);
  }
  timeMinusClick() {
    this.props.store.dispatch(Actions.countTime(-this.props.store.getState().currentGap));
  }
  render() {
    return (
      <div className="times-section">
        <div className="break-time">
          <p className="time-label">Break Length</p>
          <p className="time-value">{this.props.toHHMMSS(this.props.store.getState().currentGap)}</p>
          <button className="break-up" onClick={this.gapPlusClick}>+</button>
          <button className="break-down" onClick={this.gapMinusClick}>-</button>
        </div>
        <div className="start-time">
          <p className="time-label">Session Length</p>
          <p className="time-value">{this.props.toHHMMSS(this.props.store.getState().currentTime)}</p>
          <button className="start-up" onClick={this.timePlusClick}>+</button>
          <button className="start-down" onClick={this.timeMinusClick}>-</button>
        </div>
      </div>
    )
  }
}


export default Timeset;
