import React, { Component } from 'react';
import * as Actions from './actions';
//import * as Defaults from './defaults';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Stop",
      reset: false,
      countGap: this.props.store.getState().currentGap,
      curTime: '',
      resetTime: ''
    }
    this.startCount = this.startCount.bind(this);
    this.pauseCount = this.pauseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  sleep(ms){
    let ts1, ts2;
    ts1 = new Date().getTime() + ms;
    do ts2 = new Date().getTime(); while (ts2<ts1);
  }
  startCount() {
    if(!this.state.reset) {
      this.setState({
        resetTime: this.props.store.getState().currentTime
      });
    }
    this.setState({
      status: "Running",
      reset: true,
      curTime: this.props.store.getState().currentTime
    });

    this.timer = setInterval(() => {
      if(this.state.curTime > 0) {
        if(!this.state.reset) {
          this.setState({
            reset: true,
            curTime: this.state.curTime
          });
        }
        else {
          if(this.state.curTime === 1) {
            this.setState({
              status: "Break"
            });
          }
          this.setState({
            curTime: this.state.curTime - 1
          });
        }
        console.log("curTime:, ", this.props.toHHMMSS(this.state.curTime));
      }
      else {
        this.sleep(this.state.countGap * 1000);
        this.setState({
          status: "Running",
          reset: false,
          curTime: this.props.store.getState().currentTime
        });
        this.props.store.dispatch(Actions.resetTime(this.state.curTime + 1));
      }
    }, 1000);
  }
  pauseCount() {
    if(!this.state.reset) {
      this.setState({
        resetTime: this.props.store.getState().currentTime
      });
    }
    this.setState({
      reset: true
    });
    if(this.timer) {
      clearInterval(this.timer);
    }
    this.props.store.dispatch(Actions.resetTime(this.state.curTime));
  }
  resetCount() {
    if(this.timer) {
      clearInterval(this.timer);
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
          <div><strong>{this.state.status}</strong></div>
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
